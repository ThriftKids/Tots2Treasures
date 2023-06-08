import React, { useState, useEffect } from "react";
import DashboardModal from "../Dashboard/DashboardModal";
import { useStoreContext } from "../../utils/GlobalState";

import { ADD_TO_CART } from "../../utils/actions";
import { useQuery } from '@apollo/client';
import { idbPromise } from "../../utils/helpers";
import { QUERY_PRODUCTS } from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';


const DashboardCard = (props) => {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useStoreContext();

  const handleViewMore = () => {
    setShow(true);
  };

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  const {
    img,
    name,
    _id,
    price,
    description
  } = props;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (!itemInCart && props && props._id) {
      dispatch({
        type: ADD_TO_CART,
        product: { ...props }
      });
      idbPromise('cart', 'put', {...props} );
    }
  }

  return (
    <>
      <div className="dashboardCard">
        <div className="img">
          <img src={img} alt={name} />
        </div>
        <div className="row topRow">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>

        <div className="row bottomRow">
          <p>{description}</p>

        </div>

        <div className="rowForButtons">
          
        <div className="viewMoreDashboard" onClick={handleViewMore}>
          View more
        </div>


          <button className="addToCartButton" onClick={addToCart}>+ Add To Cart</button>

        </div>

      </div>
      <DashboardModal tags={['Toys','Kitchen','Clothing','Outdoor','Electronics']} show={show} onClose={()=>setShow(false)} {...props}/>
    </>
  );
};

export default DashboardCard;

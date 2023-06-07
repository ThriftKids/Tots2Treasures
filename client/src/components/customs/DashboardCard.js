import React, { useEffect, useState } from "react";
import DashboardModal from "../Dashboard/DashboardModal";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { useQuery } from '@apollo/client';
import { idbPromise } from "../../utils/helpers";
import { QUERY_PRODUCTS } from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';



const DashboardCard = (props) => {
  const [show, setShow] = useState(false);
  const handleViewMore = () => {
    setShow(true);

  };

  const [state, dispatch] = useStoreContext();
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
    image,
    name,
    _id,
    price,
    desc
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
          <img src={props.img} alt={props.category.split(" ")[0]} />
        </div>
        <div className="row topRow">
          <h2>{props.title}</h2>
          <p>${props.price}</p>
        </div>

        <div className="row bottomRow">
          <p>{props.desc}</p>

        </div>

        <div className="rowForButtons">
          
        <div class="viewMoreDashboard" onClick={handleViewMore}>
          View more
        </div>
          <button className="addToCartButton" onClick={addToCart}>+ Add To Cart</button>
        </div>

          

      </div>
      <DashboardModal
        categories={["Toys", "Kitchen", "Clothing", "Outdoor", "Electronics"]}
        show={show}
        onClose={() => setShow(false)}
        {...props}
      />
    </>
  );
};

export default DashboardCard;

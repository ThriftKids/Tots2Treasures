import React, { useState, useEffect } from "react";
import DashboardModal from "../Dashboard/DashboardModal";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART } from "../../utils/actions";
import { useQuery } from '@apollo/client';
import { idbPromise } from "../../utils/helpers";
import { QUERY_PRODUCTS } from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';

const DashboardCard = (item) => {
  const [show, setShow] = useState(false)
 const handleViewMore = ()=>{
  setShow(true)
 }
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
   img,
   title,
   productId,
   price,
   desc
 } = item;

 const { cart } = state

 const addToCart = () => {
   const itemInCart = cart.find((cartItem) => cartItem.productId === productId)
   if (!itemInCart) {
     dispatch({
       type: ADD_TO_CART,
       product: { item }
     });
     // made changes, removed double curly brackets
     idbPromise('cart', 'put', item );
   }
 }
 
  return (
    <>
      <div className="dashboardCard">
        <div className="img">
          <img src={img} alt={item.tag.split(" ")[0]} />
        </div>
        <div className="row topRow">
          <h2>{title}</h2>
          <p>${price}</p>
        </div>

        <div className="row bottomRow">
          <p>{desc}</p>
          <button onClick={addToCart}>+ Add To Cart</button>

     

        </div>
          <div className="viewMoreDashboard" onClick={handleViewMore}>View more</div>
      </div>
      <DashboardModal tags={['Toys','Kitchen','Clothing','Outdoor','Electronics']} show={show} onClose={()=>setShow(false)} {...item}/>
    </>
      
  
  );
};

export default DashboardCard;

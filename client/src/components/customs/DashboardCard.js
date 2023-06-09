import React, { useState, useEffect } from "react";
import DashboardModal from "../Dashboard/DashboardModal";
import { useStoreContext } from "../../utils/GlobalState";

import { ADD_TO_CART } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS } from "../../utils/actions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  const { img, title, _id, price, desc } = props;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      toast.error("This item is already in your cart", {className:'error-toast',bodyClassName: 'error-toast-body',progressClassName: 'error-toast-progress'});
    } else if (props && props._id) {
      dispatch({
        type: ADD_TO_CART,
        product: { ...props },
      });
      idbPromise("cart", "put", { ...props });
      toast.success("Item added to your cart" ,{
        className: 'success-toast',bodyClassName: 'success-toast-body',progressClassName: 'success-toast-progress'
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="dashboardCard">
        <div className="img">
          <img src={img} alt={name} />
        </div>
        <div className="row topRow">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>

        <div className="row bottomRow">
          <p>{desc}</p>
        </div>

        <div className="rowForButtons">
          <div className="viewMoreDashboard" onClick={handleViewMore}>
            View more
          </div>

          <button className="addToCartButton" onClick={addToCart}>
            + Add To Cart
          </button>
        </div>
      </div>
      <DashboardModal
        tags={["Toys", "Kitchen", "Clothing", "Outdoor", "Electronics"]}
        show={show}
        onClose={() => setShow(false)}
        {...props}
      />
    </>
  );
};

export default DashboardCard;

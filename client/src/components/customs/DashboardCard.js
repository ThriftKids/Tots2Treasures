import React, { useState } from "react";
import DashboardModal from "../Dashboard/DashboardModal";
import { useStoreContext } from "../../utils/GlobalState";

const DashboardCard = (props) => {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useStoreContext();
//function to add card to cart , but hardcoded cards only
  const handleAddToCart= ()=>{
   state.cart.push({...props})
  }

  const handleViewMore = () => {
    setShow(true);
  };

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
          <button className="addToCartButton" onClick={handleAddToCart}>+ Add To Cart</button>
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

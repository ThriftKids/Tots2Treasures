import React, { useState } from "react";
import DashboardModal from "../Dashboard/DashboardModal";

const DashboardCard = (props) => {
  const [show, setShow] = useState(false)
 const handleViewMore = ()=>{
  setShow(true)
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
          <button>+ Add To Cart</button>

     

        </div>
          <div class="viewMoreDashboard" onClick={handleViewMore}>View more</div>
      </div>
      <DashboardModal categories={['Toys','Kitchen','Clothing','Outdoor','Electronics']} show={show} onClose={()=>setShow(false)} {...props}/>
    </>
      
  
  );
};

export default DashboardCard;

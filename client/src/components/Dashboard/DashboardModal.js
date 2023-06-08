import React from "react";

const DashboardModal = (props) => {
  
  if (!props.show) {
    return null;
  }
  return (
    <div className="dashboardModal" onClick={props.onClose}>
      <div className="dashboardModal-content">
        <div className="dashboardModal-body">
          <img src={props.img} alt={props.title} />
          <div className="modal-tags">
            <p>Toys</p>
            {/* {props.tags.map((element)=>{
                return <p>{element}</p>
            })} */}
          </div>
          <div className="modalHeader">
          <h2>{props.name}</h2>
          <p>${props.price}</p>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;

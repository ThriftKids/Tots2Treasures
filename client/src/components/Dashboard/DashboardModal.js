import React from "react";

const DashboardModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div class="dashboardModal" onClick={props.onClose}>
      <div class="dashboardModal-content">
        <div class="dashboardModal-body">
          <img src={props.img} alt={props.title} />
          <div className="modal-categories">
            {props.categories.map((element)=>{
                return <p>{element}</p>
            })}
          </div>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;

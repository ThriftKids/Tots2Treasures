import React from "react";

const PurchasesCard = (props) => {
  return (
    <div className="purchaseCard">
      <div className="imgAndName">
        <img src={props.img} alt={props.title} />
        <div className="column content">
          <h3>{props.title}</h3>
          <p>Date Purchased: {props.date}</p>
          <p>{props.desc}</p>
        </div>
      </div>
      <h3 className="purchasePrice">{props.price}</h3>
    </div>
  );
};

export default PurchasesCard;

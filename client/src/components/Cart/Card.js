import React from "react";

const CartCard = (props) => {
  return (
    <div className="row cartCard">
      <div className="row imgAndName">
        <img src={props.img} alt={props.title} />
        <div className="column content">
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </div>
      </div>
      <p>{props.desc}</p>
      <i class="fa-sharp fa-solid fa-trash"></i>
    </div>
  );
};

export default CartCard;

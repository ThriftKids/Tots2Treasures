import React from "react";

const CartCard = (props) => {
  return (
    <div className="cartCard">
      <div className=" titleAndPrice">
        <img src={props.img} alt={props.title} />
        <div className="column content">
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </div>
      </div>
      <i className="fa-sharp fa-solid fa-trash"></i>
    </div>
  );
};

export default CartCard;

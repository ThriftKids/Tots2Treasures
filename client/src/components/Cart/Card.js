import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

const CartCard = (props) => {


  const [state, dispatch] = useStoreContext();

  const handleDelete=()=>{
    //find the item in the state.cart array
    //state.cart.pop(`item`)
  }

  return (
    <div className="cartCard">
      <div className=" titleAndPrice">
        <img src={props.img} alt={props.title} />
        <div className="column content">
          <h3>{props.title}</h3>
          <p>{props.price}</p>
        </div>
      </div>
      <p>{props.desc}</p>
      <i onClick={handleDelete} className="fa-sharp fa-solid fa-trash"></i>
    </div>
  );
};

export default CartCard;

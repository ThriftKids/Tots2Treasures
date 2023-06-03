import React, { useState } from "react";
import "./Cart.css";
import CartCard from "./Card";

import one from "../images/one.jpg";
import testImage from "../images/testImage.jpg";

const Cart = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={`modal`} onClick={props.onClose}>
      <div className={`cartContent`} onClick={(e) => e.stopPropagation()}>
        <div className="closeCartButtonContainer">
        <button onClick={props.onClose} className="closeCartButton">
        <i class="fa-solid fa-square-xmark fa-xl"></i>
        </button>
        </div>
        <h2 className="shoppingCartTitle">Your Shopping Cart</h2>

        <div className="column cardContainer">
          <CartCard title="Title 1" desc='some description' price="$100" img={one} />
          <CartCard title="Title 1" desc='some description' price="$100" img={testImage} />
          <CartCard title="Title 1" desc='some description' price="$100" img={one} />
          <CartCard title="Title 1" desc='some description' price="$100" img={one} />
          <CartCard title="Title 1" desc='some description' price="$100" img={one} />
          <CartCard title="Title 1" desc='some description' price="$100" img={one} />
          <CartCard title="Title 1" desc='some description' price="$100" img={one} />
          <CartCard title="Title 1" desc='some description' price="$100" img={one} />
        </div>
          <div className="cartFooterContainer">
            <p>Total: $300</p>
            <button className="purchaseCartButton">Purchase</button>
          </div>
      </div>
    </div>
  );
};

export default Cart;

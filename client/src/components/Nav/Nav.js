import React, {useState} from "react";
import "./Nav.css";
import  Cart  from "../Cart/Cart.js";

function Nav() {

  const [show, setShow] = useState(false)
  return (
    <div className="nav">
      <ul className="navList">
        <li>
          <a href="/" className="navLink">
            Dashboard
          </a>
        </li>

        <li>
          <a href="/purchases" className="navLink">
            Purchases
          </a>
        </li>
        <li>
          <a href="/inventory" className="navLink">
            Inventory
          </a>
        </li>
        <li>
          <a onClick={()=>{setShow(true)}} className="cartLogo navLink">
            <i class="fa-solid fa-cart-shopping fa-xl fa-10x "></i>
          </a>
        </li>
        <Cart onClose={() => setShow(false)} show={show} />
      </ul>
    </div>
  );
}

export default Nav;

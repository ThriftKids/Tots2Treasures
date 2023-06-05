import React from "react";
import "./Nav.css";

function Nav() {
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
          <a href="/cart" className="cartLogo navLink">
          <i class="fa-solid fa-cart-shopping fa-xl fa-10x "></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

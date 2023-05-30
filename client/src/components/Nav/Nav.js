import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="navList">
        <li>
          <p className="navLink">Dashboard</p>
        </li>
        <li>
          <p className="navLink">Orders</p>
        </li>
        <li>
          <p className="navLink">Account</p>
        </li>
        <li>
          <p className="navLink">Cart</p>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

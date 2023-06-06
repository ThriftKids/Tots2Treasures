import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {

  const location = window.location
  const [url, setUrl] = useState(null)
//making links active
  useEffect(()=>{
    setUrl(location.pathname);
  },[location])

  return (
    <div className="nav">
      <ul className="navList">
        <li>
          <a href="/" className={`navLink ${url === "/" ? "active":""}`}>
            Dashboard
          </a>
        </li>

        <li>
          <a href="/purchases" className={`navLink ${url === "/purchases" ? "active":""}`}>
            Purchases
          </a>
        </li>
        <li>
          <a href="/inventory" className={`navLink ${url === "/inventory" ? "active" : ""}`}>
            Inventory
          </a>
        </li>
        <li>
          <a href="/cart" className="cartLogo navLink">
          <i className="fa-solid fa-cart-shopping fa-xl fa-10x "></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

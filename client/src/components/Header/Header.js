import React, { useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import logoImg from "../images/tots2treasures.png"
import Cart from "../Cart/Cart";
const Header = () => {
  const [show, setShow] = useState(false)
  return (

    <header>
      <div className="header">
        <div className="tabContainer">
      <img className="t2tLogo" src={logoImg} alt="logo"></img>
     
  
        <Nav />
      </div>

        <ul className="authButtons">
        <li>
          <p onClick={()=>{setShow(true)}} className="cartLogo navLink">
            <i class="fa-solid fa-cart-shopping fa-xl fa-10x "></i>
          </p>
        </li>
        <Cart onClose={() => setShow(false)} show={show} />
          <li>
            <a href='/login'className="headerLoginButton">Login</a>
          </li>
          
          {/* <li>
            <a href='/logout' className="logoutButton">Logout</a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;

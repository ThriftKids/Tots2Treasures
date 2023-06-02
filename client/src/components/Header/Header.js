import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import logoImg from "../images/tots2treasures.png"
const Header = () => {
  return (
    <header>
      <div className="header">
        <h1><img className="t2tLogo" src={logoImg} alt="logo"></img></h1>
        

        <ul className="authButtons">
        <Nav />
          <li>
            <a href='/login'className="loginButton">Login</a>
          </li>
          <li>
            <a href='/signup' className="signupButton">Signup</a>
          </li>
          <li>
            <a href='/logout' className="logoutButton">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

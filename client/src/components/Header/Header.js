import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1>Tots2Treasure</h1>

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

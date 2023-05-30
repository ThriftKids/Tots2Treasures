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
            <p className="loginButton">Login</p>
          </li>
          <li>
            <p className="signupButton">Signup</p>
          </li>
          <li>
            <p className="logoutButton">Logout</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./Header.css";
import Nav from "../Nav/Nav";
import logoImg from "../images/tots2treasures.png";
import Cart from "../Cart/Cart";
import Auth from "../../utils/auth";
import { Link, useNavigate } from "react-router-dom"; // import Link and useNavigate

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // use the useNavigate hook

  function handleLogout() {
    Auth.logout();
    navigate('/'); // redirect to home page after logout
  }

  return (
    <header>
      <div className="header">
        <div className="tabContainer">
          <img className="t2tLogo" src={logoImg} alt="logo"></img>
          <Nav />
        </div>

        <ul className="authButtons">
          <li>
            <p onClick={() => { setShow(true) }} className="cartLogo navLink">
              <i className="fa-solid fa-cart-shopping fa-xl fa-10x "></i>
            </p>
          </li>
          <Cart onClose={() => setShow(false)} show={show} />
          {Auth.loggedIn() ? (
            <li>
              {/* Replace anchor tag with Link component */}
              <Link to="/logout" className="logoutButton" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                {/* Replace anchor tag with Link component */}
                <Link to="/login" className="headerLoginButton">
                  Login
                </Link>
              </li>
              <li>
                {/* Replace anchor tag with Link component */}
                <Link to="/signup" className="headerLoginButton">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

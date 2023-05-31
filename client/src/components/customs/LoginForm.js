import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic here
    console.log("Login form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="centerContent">
          <p>Sign In</p>
        </div>
        <label>
          <input className="authInputField"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          <input className="authInputField"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <div className="centerContent">
          <button className="loginButton" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import './LoginForm.css'

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
    <div className='loginContainer'>
    <form className='loginForm'onSubmit={handleSubmit}>
      <p>Sign In</p>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;


import React, { useState } from "react";
import "./SignupForm.css";
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

const SignupForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signupContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <div className="centerContent">
          <p>Create Account</p>
        </div>
        <label>
          <input
          className="authInputField"
            type="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
          className="authInputField"
            name="lastName"
            type="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
          className="authInputField"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
          className="authInputField"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
          className="authInputField"
            name="confirmPass"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </label>
        <div className="centerContent1">
        <p className="bottomP">Have an Account? <a href="/login">Login</a></p>
          <button className="loginButtonCard" type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
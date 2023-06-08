import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import "./LoginForm.css";
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleFormSubmit}>
        <div className="centerContent">
          <p>Sign In</p>
        </div>
        <label>
          <input className="authInputField"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </label>

        <label>
          <input className="authInputField"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </label>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
        <div className="centerContent1">
          <p className="bottomP">Don't have an account? <a href="/signup">Sign up</a></p>
          <button className="loginButtonCard" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
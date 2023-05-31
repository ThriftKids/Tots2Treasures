import React, { useState } from 'react';
import './SignupForm.css'
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // signup logic here
    console.log('Signup form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className='signupContainer'>
    <form className='signupForm' onSubmit={handleSubmit}>
      
      <p>Create Accout</p>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>
      
      <button type="submit">Sign Up</button>
      
    </form>
    </div>
  );
};

export default SignupForm;
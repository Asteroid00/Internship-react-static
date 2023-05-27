
import { TextField, Button } from '@mui/material';
import './styles.css';
import React, { useState,useContext } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    console.log('Sign-up', email, password);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

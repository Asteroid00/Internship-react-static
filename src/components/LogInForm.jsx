import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import './styles.css';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = (e) => {
    e.preventDefault();
    // Perform log-in logic here
    console.log('Log-in', email, password);
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
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
          Log In
        </Button>
      </form>
    </div>
  );
};

export default LogInForm;

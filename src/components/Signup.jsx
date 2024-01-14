import React, { useState } from 'react';
import '../CSS/signup.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signup clicked with:', { name, email, password });
  };

  return (
    <div className="App">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

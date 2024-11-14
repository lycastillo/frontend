// src/components/WelcomeScreen.js
import React, { useState } from 'react';
import './WelcomeScreen.css'; // Import CSS for styling

const WelcomeScreen = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleContinue = () => {
    alert(`Welcome, ${name}!`);
  };

  return (
    <div
      className="welcome-screen"
      style={{
        backgroundImage: `url('/bg.jpg')`, // Inline style for background image from public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <h1>Welcome Learner!</h1>
      <div className="name-input-container">
        <label htmlFor="name">What is your name?</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default WelcomeScreen;

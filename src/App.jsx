import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/quote');
  };

  return (
    <div id="web">
      <div id="main">
        <div id="nav">
          <h1 id="github"><a href="#">Github</a></h1>
          <h1><a href="#">LinkedIn</a></h1>
          <h1><a href="#">Email</a></h1>
        </div>
        <div id="hero">
          <h1>Gita Speaks</h1>
          <p>Get a life lesson from Srimad bhagvadgita - song of god himself.</p>
          <button onClick={handleButtonClick}>Get a quote</button>
        </div>
        <div id="footer">
          Made by @nsvoriginals..
        </div>
      </div>
    </div>
  );
}

export default App;

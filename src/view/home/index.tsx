import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../statics/images/logo.svg';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Stone-UI.</p>
        <Link to="/Home">Get Started</Link>
      </header>
    </div>
  );
}

export default App;

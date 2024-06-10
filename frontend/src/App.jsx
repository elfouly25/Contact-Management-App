// App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Contact Management App</h1>
      <Link to="/contacts">
        <button className="view-button">View Contacts</button>
      </Link>
      <Link to="/create">
        <button className="create-button">Create New Contact</button>
      </Link>
    </div>
  );
}

export default App;

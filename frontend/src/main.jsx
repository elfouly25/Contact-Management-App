// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import CreateContact from './CreateContact.jsx';
import ContactListPage from './ContactListPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contacts" element={<ContactListPage />} />
        <Route path="/create" element={<CreateContact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

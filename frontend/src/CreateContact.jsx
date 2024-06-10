// CreateContact.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from './ContactForm';
import './App.css';

const CreateContact = () => {
  const navigate = useNavigate();

  const onUpdate = () => {
    navigate('/contacts');
  };

  return (
    <div className="app-container">
      <h2>Create New Contact</h2>
      <ContactForm updateCallback={onUpdate} />
    </div>
  );
};

export default CreateContact;

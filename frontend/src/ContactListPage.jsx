// ContactListPage.jsx
import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import "./App.css";

const ContactListPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  return (
    <div className="app-container">
      <h2>Contact List</h2>
      <div className="table-container">
        <ContactList contacts={contacts} updateCallback={fetchContacts} />
      </div>
    </div>
  );
};

export default ContactListPage;

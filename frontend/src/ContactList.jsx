// ContactList.jsx
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [editableContact, setEditableContact] = useState(null);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  const startEditing = (contact) => {
    setEditableContact(contact.id);
    setFormData({ firstName: contact.firstName, lastName: contact.lastName, email: contact.email });
  };

  const cancelEditing = () => {
    setEditableContact(null);
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`http://127.0.0.1:5000/update_contact/${id}`, options);
    if (response.status === 200) {
      fetchContacts();
      cancelEditing();
    } else {
      console.error("Failed to update");
    }
  };

  const onDelete = async (id) => {
    try {
      const options = { method: "DELETE" };
      const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
      if (response.status === 200) {
        fetchContacts();
      } else {
        console.error("Failed to delete");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="contact-list-container">
      <h2 className="contact-list-title">Contact List</h2>
      <div className="contact-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            {editableContact === contact.id ? (
              <div className="contact-info">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="contact-actions">
                  <button onClick={() => handleUpdate(contact.id)}>Save</button>
                  <button onClick={cancelEditing}>Cancel</button>
                </div>
              </div>
            ) : (
              <div className="contact-info">
                <p><strong>First Name:</strong> {contact.firstName}</p>
                <p><strong>Last Name:</strong> {contact.lastName}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <div className="contact-actions">
                  <button onClick={() => startEditing(contact)}>Update</button>
                  <button onClick={() => onDelete(contact.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/create">
        <button className="create-new-contact-button">Create New Contact</button>
      </Link>
    </div>
  );
};

export default ContactList;

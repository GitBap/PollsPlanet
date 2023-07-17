import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: add the logic to submit the form
    console.log(formData);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <label style={{ marginBottom: '10px' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: 'block', marginBottom: '10px' }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

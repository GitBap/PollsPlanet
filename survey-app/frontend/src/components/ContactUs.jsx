import React, { useState } from 'react';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import './styles/contact.scss';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:someone@example.com?subject=Contact from ${name} (${email})&body=${message}`;
    };

    return (
        <section className="contact">
          <div className="container">
            <div className="wrapper">
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <h2 className="form-title">Contact Us</h2>
                <div className="input-box">
                  <PersonOutlineOutlinedIcon />
                  <input type="text" id="name" className="input-text" placeholder="Your Name" 
                        value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-box">
                  <EmailOutlinedIcon />
                  <input type="email" id="email" className="input-text" placeholder="Your Email"
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                  <PersonOutlineOutlinedIcon />
                  <textarea id="message" className="input-text" placeholder="Your Message"
                            value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <button className="btn" type="submit">Submit</button>
              </form>
              <div className="greeting">
                <h3>Have questions? We're here to help!</h3>
                <p>Enter your details and we'll get back to you as soon as possible.</p>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Contact;

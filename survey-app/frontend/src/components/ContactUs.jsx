import React from 'react';
import "./styles/contact.scss";

const Contact = () => {
    return (
        <div className="container">
            <div className="contact-block">
                <h1>Contact Us</h1>
                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="input-text" placeholder="Your Name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="input-text" placeholder="Your Email" />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="input-text" placeholder="Your Message"></textarea>

                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

import React, { useState } from 'react';
import contact from "../assets/outing.jpeg";
import '../css/contactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    //
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Please enter your name';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Please enter your email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Please enter a subject';
            isValid = false;
        }

        if (!formData.message.trim()) {
            errors.message = 'Please enter your message';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendViaWhatsApp();
        } else {
            document.getElementById("success").innerHTML = "";
        }
    };

    const sendViaWhatsApp = () => {
        const phoneNumber = "919876543210"; // <-- Replace with your NGO WhatsApp number (no + or spaces)
        const message = `New Inquiry from Andakshi Asharam Website:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const whatsappURL = isMobile
            ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        document.getElementById("success").innerHTML = "✔ Redirecting to WhatsApp...";
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="section-header text-center">
                        <h3>Get In Touch</h3>
                        <h2>Contact for any query</h2>
                    </div>

                    <div className="contact-img">
                        <img src={contact} alt="Contact" />
                    </div>

                    <div className="contact-form">
                        <div className="sent text-success" id="success"></div>
                        <form id="contactForm" onSubmit={handleSubmit} noValidate>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                                <p className="text-danger">{errors.name}</p>
                            </div>

                            <div className="control-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    required
                                />
                                <p className="text-danger">{errors.email}</p>
                            </div>

                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <p className="text-danger">{errors.subject}</p>
                            </div>

                            <div className="control-group">
                <textarea
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                                <p className="text-danger">{errors.message}</p>
                            </div>

                            <div>
                                <button className="btn btn-custom" type="submit">
                                    Send via WhatsApp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;

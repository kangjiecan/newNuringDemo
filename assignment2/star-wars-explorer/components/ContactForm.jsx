"use client";

import { useState } from 'react';
import { submitContactForm } from '../app/contact/actions';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData);
      setFormStatus({ submitted: true, success: true });
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({ submitted: true, success: false });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="card bg-dark border-secondary">
      <div className="card-body">
        {formStatus.submitted ? (
          <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'} mb-4`}>
            {formStatus.success
              ? "Thank you for your message! We'll get back to you soon."
              : "Something went wrong. Please try again."}
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">Your Name</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Your Email</label>
            <input
              type="email"
              className="form-control bg-dark text-light border-secondary"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="form-label text-light">Your Message</label>
            <textarea
              className="form-control bg-dark text-light border-secondary"
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-warning w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
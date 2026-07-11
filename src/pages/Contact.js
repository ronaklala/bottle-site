import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Pages.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>

          <p className="section-subtitle">
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">

          <div className="contact-grid">

            <div>

              <div className="contact-card card">
                <FaPhoneAlt className="contact-icon"/>

                <h3>Phone</h3>

                <p>+91 99999 99999</p>
              </div>

              <div className="contact-card card">
                <FaEnvelope className="contact-icon"/>

                <h3>Email</h3>

                <p>info@example.com</p>
              </div>

              <div className="contact-card card">
                <FaMapMarkerAlt className="contact-icon"/>

                <h3>Address</h3>

                <p>Your Business Address</p>
              </div>

            </div>

            <form
              className="contact-form card"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
              />

              <button className="btn">
                Send Message
              </button>

              {submitted && (
                <p className="success-msg">
                  Thank you! We will contact you soon.
                </p>
              )}

            </form>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;
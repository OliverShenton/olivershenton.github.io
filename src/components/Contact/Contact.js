import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <form
          className="contact-form"
          id="contact-form"
          action="https://formspree.io/f/xgvejvvy"
          method="POST"
          target="_blank">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            autoComplete="off"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            required></textarea>
          <button type="submit">Send Message</button>
          <div id="status"></div>
        </form>
      </div>
    </section>
  );
}

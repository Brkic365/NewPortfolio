import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

import { Fade } from "react-awesome-reveal";

export default function Contact({ title }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Confirmation message seen on success page after filling the contact form out
  const ConfirmationMessage = (
    <div className={styles.confirmed}>
      <p>
        Thank you for submitting this form. You should receive response within
        24-48 hours.
      </p>

      <button onClick={() => setSubmitted(false)}>
        <p>Submit another response</p>
        <img src="/icons/arrow.svg" alt="Icon of an arrow" />
      </button>
    </div>
  );

  const ContactForm = (
    <Fade cascade triggerOnce delay={800}>
      <form
        className="container"
        method="post"
        name="contact-form"
        action="/success"
        onSubmit={() => setSubmitted(true)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="subject"
          value={`You've got mail from ${name}`}
        />
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className={styles.group}>
          <div className={styles.one}>
            <label>Full Name</label>
            <input
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className={styles.two}>
            <label>E-mail Address</label>
            <input id="email" name="email" required type="email" />
          </div>
        </div>

        <div className={styles.group}>
          <div className={styles.one}>
            <label>Phone Number (optional)</label>
            <input
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className={styles.two}>
            <label>Company Name (optional)</label>
            <input id="company" name="company" type="text" />
          </div>
        </div>

        <label>Message</label>
        <textarea id="message" name="message" required rows="5" />

        <button type="submit">
          <p>Submit</p>
          <img src="/icons/arrow.svg" alt="Icon of an arrow" />
        </button>
      </form>
    </Fade>
  );

  return (
    <div className={styles.contact}>
      {!submitted ? ContactForm : ConfirmationMessage}
    </div>
  );
}

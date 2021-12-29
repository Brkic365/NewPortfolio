import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";

import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const [name, setName] = useState("");

  const ContactForm = (
    <Fade cascade triggerOnce delay={800}>
      <form
        className="container"
        method="POST"
        action="/success"
        name="contact-form"
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

  return <div className={styles.contact}>{ContactForm}</div>;
}

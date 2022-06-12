import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

import { Fade } from "react-awesome-reveal";

export default function Contact() {
  const router = useRouter();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mgedqnke",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );

        router.push("/success", undefined, { shallow: true });
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  const ContactForm = (
    <Fade cascade triggerOnce delay={800}>
      <form onSubmit={handleOnSubmit}>
        {/* Hidden input used to change the subject of the email */}
        <input
          type="hidden"
          name="_subject"
          value="New message from portfolio website"
        />
        <div className={styles.group}>
          <div className={styles.one}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
          </div>
          <div className={styles.two}>
            <label htmlFor="email">E-mail Address</label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </div>
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          rows="5"
        />

        {/* Text of button changes depending on the status */}
        <button type="submit" disabled={status.submitting}>
          <p>
            {!status.submitting
              ? !status.submitted
                ? "Submit"
                : "Submitted"
              : "Submitting..."}
          </p>
          <img src="/icons/arrow.svg" alt="Icon of an arrow" />
        </button>
      </form>
    </Fade>
  );

  return <div className={styles.contact}>{ContactForm}</div>;
}

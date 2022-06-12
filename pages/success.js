import React from "react";
import Link from "next/link";
import styles from "../styles/Success.module.scss";
import Image from "next/image";

function success() {
  return (
    <div className={styles.confirmed}>
      <Image
        src="/images/mail_sent.svg"
        alt="Mail Sent"
        width={500}
        height={300}
        priority
      />
      <p>
        Thank you for submitting this form. You should receive response within
        24-48 hours.
      </p>
      <Link href="/#contact">
        <a>
          <button>
            <p>Submit another response</p>
            <img src="/icons/arrow.svg" alt="Icon of an arrow" />
          </button>
        </a>
      </Link>
    </div>
  );
}

export default success;

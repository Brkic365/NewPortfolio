import React from "react";
import Link from "next/link";
import styles from "../styles/Success.module.scss";
import Image from "next/image";
import Head from "next/head";

function success() {
  return (
    <div className={styles.confirmed}>
      <Head>
        <title>Success</title>
        <meta
          name="description"
          content="Thank you for submitting this form. You should receive response within 24-48 hours."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

import React from "react";
import Link from "next/link";
import styles from "../styles/Success.module.scss";

function success() {
  return (
    <div className={styles.confirmed}>
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

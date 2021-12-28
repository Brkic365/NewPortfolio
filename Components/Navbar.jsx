import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.nav} ${
        scrollPosition >= 400 ? styles.fixedNav : null
      }`}
    >
      <div className={styles.left}>
        <Link href="#">
          <h1>ANTONIO</h1>
        </Link>
      </div>
      <div className={styles.middle}>
        <ul>
          <li>
            <Link href="#">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a>SKILLS</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link href="#reviews">
              <a>REVIEWS</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>CONTACT ME</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link href="#contact">
          <img src="/icons/phone.svg" alt="Icon of a phone" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

import Skill from "../Components/Skill";
import Carousel from "../Components/Carousel";
import Review from "../Components/Review";
import Contact from "../Components/Contact";

import { motion } from "framer-motion";

import { Fade } from "react-awesome-reveal";

export default function Home() {
  const [namecardOpen, setNamecardOpen] = useState(false);

  const namecard_variants = {
    open: { x: "110%" },
    closed: { x: 0 },
  };

  const skills = [
    {
      name: "Quality Design",
      desc: "I can design professional looking and creative websites",
      img: "design.svg",
    },
    {
      name: "Clean Code",
      desc: "I always take care thatmy code is clean and readable",
      img: "code.svg",
    },
    {
      name: "Customer Service",
      desc: "Customer's opinion is the most important factor to me when I develop",
      img: "support.svg",
    },
  ];

  const reviews = [
    {
      name: "Marin",
      review:
        "Amazing developer, very professional and has great customer service, great experience dealing with him. Delivered fast and optimized code and everything worked like a charm! I am very much satisfied with his work and would love to work with him again in the future!",
      stars: 5,
    },
    {
      name: "Adam",
      review:
        "I really enjoyed working with Antonio! He is very professional and dedicated to his craft. I reccomend him to anyone who is looking for a website. ",
      stars: 5,
    },
    {
      name: "Oliver",
      review:
        "I loved working with Antonio. He did everything I asked for and even more! If I ever need a website again, I will definitely return to him!",
      stars: 5,
    },
  ];

  return (
    <div className={styles.home}>
      <Head>
        <title>Brkic | Web Developer</title>
        <meta
          name="description"
          content="Hello! I am Antonio Brkic, a real estate web developer who makes websites for real estate agents, hotels and apartments."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Start Section */}

        <div className={styles.start} id="">
          <h1>ANTONIO</h1>
          <div className={styles.circles}>
            <img
              className={styles.center}
              src="/graphics/main_circle.svg"
              alt="Graphic of a circle"
            />
            <img
              className={styles.left}
              src="/graphics/small_circle.svg"
              alt="Graphic of a circle"
            />
            <img
              className={styles.right}
              src="/graphics/small_circle.svg"
              alt="Graphic of a circle"
            />
          </div>
          <div className={styles.namecard_container}>
            <div className={styles.namecard}>
              <p>My name is</p>
              <h2>Antonio</h2>
              {!namecardOpen ? (
                <div
                  className={styles.link}
                  onClick={() => setNamecardOpen(!namecardOpen)}
                >
                  <p>Read More</p>
                  <img src="/icons/arrow.svg" alt="Icon of an arrow" />
                </div>
              ) : (
                <div
                  className={styles.link}
                  onClick={() => setNamecardOpen(!namecardOpen)}
                >
                  <p>Close</p>
                  <img
                    className={styles.closeArrow}
                    src="/icons/arrow.svg"
                    alt="Icon of an arrow"
                  />
                </div>
              )}
            </div>

            <motion.p
              className={styles.details}
              animate={namecardOpen ? "open" : "closed"}
              variants={namecard_variants}
              transition={{ x: { type: "tween" } }}
            >
              {
                "Hello, I am Antonio Brkic! I am based in Croatia and I had passion for coding ever since I was a child. I am a web developer specialized in creating best Real Estate, Hotel and Apartment websites. "
              }
            </motion.p>
          </div>
          <div className={styles.workCards}>
            <div className={styles.realEstateCard}>
              <div className={styles.imageHolder} />
              <h3>REAL ESTATE WEBSITES</h3>
            </div>
            <div className={styles.hotelCard}>
              <div className={styles.imageHolder} />
              <h3>HOTEL WEBSITES</h3>
            </div>
            <div className={styles.apartmentCard}>
              <div className={styles.imageHolder} />
              <h3>APARTMENT WEBSITES</h3>
            </div>
          </div>
        </div>

        {/* Skills Section */}

        <div className={styles.skills} id="skills">
          <Fade cascade triggerOnce>
            <h2>
              My <span>skills</span>
            </h2>
            <p>I am constantly learning and improving my skills</p>
          </Fade>

          <div className={styles.skillList}>
            <Fade cascade triggerOnce delay={800}>
              {skills.map((skill, i) => {
                return <Skill skill={skill} key={i} />;
              })}
            </Fade>
          </div>
        </div>

        {/* Projects Section */}

        <div className={styles.projects} id="projects">
          <Fade cascade triggerOnce>
            <h2>
              Some of my previous <span>work</span>
            </h2>
          </Fade>
          <Carousel />
        </div>

        {/* Reviews Section */}

        <div className={styles.reviews} id="reviews">
          <Fade cascade triggerOnce>
            <h2>
              {"Don't"} take my <span>word</span> for it
            </h2>
            <p>Listen to these satisfied clients</p>
          </Fade>
          <div className={styles.reviewGrid}>
            <Fade cascade triggerOnce delay={800}>
              {reviews.map((review, i) => {
                return <Review review={review} key={i} />;
              })}
            </Fade>
          </div>
        </div>

        {/* Contact Section */}

        <div className={styles.contactSection} id="contact">
          <Fade cascade triggerOnce>
            <h2>
              Are you <span>interested</span> yet?
            </h2>
            <p>
              If you are, please contact me below or{" "}
              <a href="mailto: brkicweb@gmail.com">email</a> me
            </p>
          </Fade>
          <Contact />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>©Brkic 2021. All RIghts Reserved</p>
        <div className={styles.socials}>
          <Link href="https://www.linkedin.com/in/antonio-brkic-923137226/">
            <a target="_blank">
              <img src="/icons/socials/linkedin.svg" alt="Icon of Linked In" />
            </a>
          </Link>
          <Link href="https://github.com/Brkic365">
            <a target="_blank">
              <img src="/icons/socials/github.svg" alt="Icon of Github" />
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}

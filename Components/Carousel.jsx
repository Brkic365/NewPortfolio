import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Carousel.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import EfficientCursor from "react-efficient-cursor";
import { Fade } from "react-awesome-reveal";

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);

  const slides = [
    {
      img: "/images/projects/rocketwizard.webp",
      name: "Rocket Wizard",
      desc: "Large-scale copytrading website featuring talented traders",
      link: "https://www.rocketwizard.io/",
    },
    {
      img: "/images/projects/ebankc.webp",
      name: "Ebankc",
      desc: "EBankc is the most rewarding and secured institution in the DeFi industry.",
      link: "https://ebankc.vercel.app/",
    },
    {
      img: "/images/projects/luxury_perspective.webp",
      name: "Luxury Perspective",
      desc: "Professional Real Estate website with multiple pages, such as About Us, Properties and one page for every single property",
      link: "https://luxuryperspective.netlify.app",
    },
    {
      img: "/images/projects/honeycomb.webp",
      name: "Honeycomb",
      desc: "Full-stack website made for house builders. It is used to plan projects and develop ideas regarding the house building. It features full authentication system and a lot more",
      link: "https://baustela2.netlify.app",
    },
    {
      img: "/images/projects/bakmazon.webp",
      name: "Bakmazon",
      desc: "A e-commerce website that is used to sell clothes and footwear. Still in development",
      link: "https://bakmazon.netlify.app",
    },
    {
      img: "/images/projects/minty.webp",
      name: "Minty Solutions",
      desc: "All-in-one digital marketing service personalised to your project that enhances and optimizes social media management and marketing",
      link: "https://mintysolutions.com",
    },
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div className={styles.next} onClick={onClick}>
        <img src="/icons/carouselArrow.svg" alt="Icon of a carousel arrow" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={styles.prev} onClick={onClick}>
        <img src="/icons/carouselArrow.svg" alt="Icon of a carousel arrow" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className={styles.carousel}>
      <EfficientCursor
        className={`${styles.invisibleCursor} ${
          cursorVisible ? styles.visibleCursor : null
        }`}
      >
        <div className={styles.cursorCircle}>
          <p>VISIT</p>
        </div>
      </EfficientCursor>
      <Fade cascade triggerOnce delay={800}>
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div
              className={i === imageIndex ? styles.activeSlide : styles.slide}
            >
              {i === imageIndex ? (
                <Link href={slide.link}>
                  <a target="_blank">
                    <img
                      src={slide.img}
                      alt="Image of the project"
                      onMouseEnter={() =>
                        i === imageIndex && setCursorVisible(true)
                      }
                      onMouseLeave={() =>
                        i === imageIndex && setCursorVisible(false)
                      }
                    />
                  </a>
                </Link>
              ) : (
                <img src={slide.img} alt="Image of the project" />
              )}
            </div>
          ))}
        </Slider>
      </Fade>
      <div className={styles.text}>
        <Fade cascade triggerOnce delay={1200}>
          <h2>{slides[imageIndex].name}</h2>
          <p>{slides[imageIndex].desc}</p>
          <Link href={slides[imageIndex].link} target="_blank">
            <a target="_blank">
              <div className={styles.link}>
                <p>Visit</p>
                <img src="/icons/arrow.svg" alt="Icon of an arrow" />
              </div>
            </a>
          </Link>
        </Fade>
      </div>
    </div>
  );
}

export default Carousel;

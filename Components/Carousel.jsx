import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Carousel.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Fade } from "react-awesome-reveal";

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);

  const slides = [
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Luxury Perspective",
      desc: "Professional Real Estate website with multiple pages, such as About Us, Properties and one page for every single property",
      link: "https://luxuryperspective.netlify.app",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Luxury Perspective",
      desc: "Professional Real Estate website with multiple pages, such as About Us, Properties and one page for every single property",
      link: "https://luxuryperspective.netlify.app",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Luxury Perspective",
      desc: "Professional Real Estate website with multiple pages, such as About Us, Properties and one page for every single property",
      link: "https://luxuryperspective.netlify.app",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Luxury Perspective",
      desc: "Professional Real Estate website with multiple pages, such as About Us, Properties and one page for every single property",
      link: "https://luxuryperspective.netlify.app",
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
      <Fade cascade triggerOnce delay={800}>
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div
              className={i === imageIndex ? styles.activeSlide : styles.slide}
            >
              <img src={slide.img} alt="Image of the project" />
            </div>
          ))}
        </Slider>
      </Fade>
      <div className={styles.text}>
        <Fade cascade triggerOnce delay={1200}>
          <h2>LUXURY PERSPECTIVE</h2>
          <p>
            Professional Real Estate website with multiple pages, such as About
            Us, Properties and one page for every single property.
          </p>
          <Link href="https://luxuryperspective.netlify.app">
            <div className={styles.link}>
              <p>Visit</p>
              <img src="/icons/arrow.svg" alt="Icon of an arrow" />
            </div>
          </Link>
        </Fade>
      </div>
    </div>
  );
}

export default Carousel;

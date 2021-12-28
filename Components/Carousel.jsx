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
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Luxury Perspective",
      desc: "Professional Real Estate website with multiple pages, such as About Us, Properties and one page for every single property",
      link: "https://luxuryperspective.netlify.app",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Honeycomb",
      desc: "Website made for planning projects for house builders",
      link: "https://baustela2.netlify.app",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Bakmazon",
      desc: "A e-commerce website made for selling all kinds of clothes and footwear",
      link: "https://bakmazon.netlify.app",
    },
    {
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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

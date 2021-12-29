import React from "react";
import styles from "../styles/Review.module.scss";

function Review({ review }) {
  return (
    <div className={styles.review}>
      <div className={styles.left}>
        <img src="/images/avatar.svg" alt="Profile photo of a reviewer" />
        <h3>{review.name}</h3>
      </div>
      <div className={styles.right}>
        <div className={styles.stars}>
          {/* Full Stars */}
          {[...Array(review.stars).keys()].map((star) => (
            <img src="/icons/full_star.svg" alt="Icon of a full star" />
          ))}

          {/* Empty Stars */}
          {[...Array(5 - review.stars).keys()].map((star) => (
            <img src="/icons/empty_star.svg" alt="Icon of a empty star" />
          ))}
        </div>
        <p>{review.review}</p>
      </div>
    </div>
  );
}

export default Review;

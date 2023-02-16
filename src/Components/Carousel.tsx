import React, { useState } from 'react';

import { Next, Previous } from '../assets/icons';
import { productImages } from '../assets/images';

import styles from '../styles/Carousel.module.scss';

export default function Carousel() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getNextImageIndex = (increment: number) => {
    setActiveImageIndex((prev) => {
      let next = prev + increment;
      if (next >= productImages.length) {
        next = 0;
      } else if (next < 0) {
        next = productImages.length - 1;
      }

      return next;
    });
  };

  return (
    <div className={styles.Carousel}>
      <div className={styles.buttons}>
        <span onClick={() => getNextImageIndex(-1)}>
          <Previous />
        </span>

        <span onClick={() => getNextImageIndex(1)}>
          <Next />
        </span>
      </div>

      <ul style={{ transform: `translateX(calc(-100dvw * ${activeImageIndex}))` }}>
        {productImages.map((each) => (
          <li key={each} style={{ backgroundImage: `url('${each}')` }}></li>
        ))}
      </ul>
    </div>
  );
}

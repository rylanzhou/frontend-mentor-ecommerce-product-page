import React, { useState } from 'react';

import { Next, Previous } from '../assets/icons';

import styles from '../styles/Carousel.module.scss';

export default function Carousel({ images }: { images: string[] }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getNextImageIndex = (increment: number) => {
    setActiveImageIndex((prev) => {
      let next = prev + increment;
      if (next >= images.length) {
        next = 0;
      } else if (next < 0) {
        next = images.length - 1;
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

      <ul
        style={{
          transform: `translateX(calc(clamp(375px, 100dvw, 50rem) * -${activeImageIndex}))`,
        }}
      >
        {images.map((each) => (
          <li key={each} style={{ backgroundImage: `url('${each}')` }}></li>
        ))}
      </ul>
    </div>
  );
}

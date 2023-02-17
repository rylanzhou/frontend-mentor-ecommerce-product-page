import React, { useState } from 'react';
import { Close, Next, Previous } from '../assets/icons';
import styles from '../styles/Lightbox.module.scss';

interface LightBoxProps {
  images: { origin: string; thumb: string }[];
  toggleFullscreen: (visible: boolean) => void;
}

function LightBoxInner({ images, toggleFullscreen }: LightBoxProps) {
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
    <div className={styles.container}>
      <Close className={styles.close} onClick={() => toggleFullscreen(false)} />
      <div className={styles.focus}>
        <div className={styles.buttons}>
          <span onClick={() => getNextImageIndex(-1)}>
            <Previous />
          </span>

          <span onClick={() => getNextImageIndex(1)}>
            <Next />
          </span>
        </div>
        <img src={images[activeImageIndex].origin} alt="" onClick={() => toggleFullscreen(true)} />
      </div>

      <div className={styles.thumbnails}>
        {images.map((each, index) => (
          <div
            key={each.origin}
            aria-current={index === activeImageIndex}
            onClick={() => setActiveImageIndex(index)}
          >
            <img src={each.thumb} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LightBox({ images }: Pick<LightBoxProps, 'images'>) {
  const [fullscreenVisible, setFullscreenVisible] = useState(false);

  return (
    <>
      <div className={`${styles.Lightbox}`}>
        <LightBoxInner images={images} toggleFullscreen={setFullscreenVisible} />
      </div>

      <div className={`${styles.Lightbox} ${styles.fullscreen}`} aria-hidden={!fullscreenVisible}>
        <LightBoxInner images={images} toggleFullscreen={setFullscreenVisible} />
      </div>
    </>
  );
}

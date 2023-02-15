import React, { useState } from 'react';

import Carousel from './Components/Carousel';
import Header from './Components/Header';
import { Cart, Minus, Plus } from './assets/icons';

import styles from './styles/App.module.scss';

const data = {
  company: 'Sneaker Company',
  title: 'Fall Limited Edition Sneakers',
  desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  final: '$125.00',
  discount: '50%',
  origin: '$250.00',
};

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <main>
        <Carousel />

        <section className={styles.detail}>
          <h3 className={styles.company}>{data.company}</h3>
          <h1 className={styles.title}>{data.title}</h1>
          <p>{data.desc}</p>

          <div className={styles.price}>
            <h1 className={styles.final}>{data.final}</h1>
            <span className={styles.discount}>{data.discount}</span>
            <span className={styles.origin}>{data.origin}</span>
          </div>

          <div className={styles.operations}>
            <div className={styles['num-picker']}>
              <span>
                <img src={Minus} alt="" />
              </span>
              <span className={styles.counter}>{0}</span>
              <span>
                <img src={Plus} alt="" />
              </span>
            </div>

            <div className={styles['add-to-cart']}>
              <img src={Cart} alt="" />
              <span>Add to cart</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

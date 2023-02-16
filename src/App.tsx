import React, { useContext, useState } from 'react';

import { ShoppingContext, formatter } from './ShoppingContext';

import Carousel from './Components/Carousel';
import Header from './Components/Header';
import { Cart, Minus, Plus } from './assets/icons';

import styles from './styles/App.module.scss';

const data: IMerchant = {
  id: 1,
  company: 'Sneaker Company',
  title: 'Fall Limited Edition Sneakers',
  desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  final: 125,
  discount: 50,
  origin: 250,
  thumbnail: '/src/assets/image-product-1-thumbnail.jpg',
};

function App() {
  const { appendItem } = useContext(ShoppingContext) as IShoppingContext;

  const [counter, setCounter] = useState(1);

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
            <h1 className={styles.final}>{formatter.format(data.final)}</h1>
            <span className={styles.discount}>{data.discount}%</span>
            <span className={styles.origin}>{formatter.format(data.origin)}</span>
          </div>

          <div className={styles.operations}>
            <div className={styles['num-picker']}>
              <i onClick={() => setCounter((prev) => Math.max(1, prev - 1))}>
                <Minus />
              </i>
              <span className={styles.counter}>{counter}</span>
              <i onClick={() => setCounter((prev) => prev + 1)}>
                <Plus />
              </i>
            </div>

            <div className={styles['add-to-cart']} onClick={() => appendItem(data, counter)}>
              <Cart fill="white" />
              <span>Add to cart</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

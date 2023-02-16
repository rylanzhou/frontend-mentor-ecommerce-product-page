import React, { useContext } from 'react';

import { ShoppingContext, formatter } from '../ShoppingContext';

import { Delete } from '../assets/icons';

import styles from '../styles/Header.module.scss';

export default function Basket({ visible }: { visible: boolean }) {
  const { items, removeItem } = useContext(ShoppingContext) as IShoppingContext;

  return (
    <div className={styles.Basket} aria-expanded={visible}>
      <div className={styles.header}>Cart</div>

      <div className={styles.content}>
        {items.length ? (
          <>
            <ul>
              {items.map((each) => (
                <li key={each.id}>
                  <img src={each.thumbnail} alt="" />
                  <div className={styles.info}>
                    <h4 className={styles.title}>{each.title}</h4>
                    <h4 className={styles.price}>
                      {formatter.format(each.final)} x {each.amount}
                      <strong>{formatter.format(each.final * each.amount)}</strong>
                    </h4>
                  </div>
                  <Delete className={styles.remove} onClick={() => removeItem(each.id)} />
                </li>
              ))}
            </ul>

            <div className={styles.checkout}>Checkout</div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

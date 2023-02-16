import React, { useContext, useState } from 'react';

import { ShoppingContext } from '../ShoppingContext';

import { Cart, Close, Menu } from '../assets/icons';
import { Avatar } from '../assets/images';
import Logo from '../assets/logo.svg';

import styles from '../styles/Header.module.scss';
import Basket from './Basket';

function MenuItems() {
  return (
    <ul>
      {['collections', 'men', 'women', 'about', 'contact'].map((each) => (
        <li key={each}>{each}</li>
      ))}
    </ul>
  );
}

export default function Header() {
  const { totalAmount } = useContext(ShoppingContext) as IShoppingContext;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartIsExpanded, setCartIsExpanded] = useState(false);

  return (
    <>
      <header className={styles.Header}>
        <Menu onClick={() => setMenuIsOpen(true)} />
        <img src={Logo} alt="" />
        <span
          className={styles['cart-btn']}
          aria-valuenow={totalAmount}
          onClick={() => setCartIsExpanded(!cartIsExpanded)}
        >
          <Cart className={styles.cart} />
        </span>
        <img className={styles.avatar} src={Avatar} alt="" />
      </header>

      <Basket visible={cartIsExpanded} />

      <div
        className={styles.mask}
        aria-hidden={!menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      ></div>

      <div className={styles['menu-drawer']} aria-hidden={!menuIsOpen}>
        <Close className={styles.close} onClick={() => setMenuIsOpen(false)} />
        <MenuItems />
      </div>
    </>
  );
}

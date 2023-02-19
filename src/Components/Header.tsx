import React, { useContext, useEffect, useRef, useState } from 'react';

import { ShoppingContext } from '../ShoppingContext';

import { Cart, Close, Menu } from '../assets/icons';
import { Avatar } from '../assets/images';
import Logo from '../assets/logo.svg';

import styles from '../styles/Header.module.scss';
import Basket from './Basket';

function MenuItems() {
  return (
    <ul className={styles['menu-items']}>
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
  const [anchor, setAnchor] = useState('0px');

  const headEl = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setAnchor((headEl.current?.offsetLeft ?? 0) + (headEl.current?.offsetWidth ?? 0) + 'px');
    };

    resizeHandler();

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <>
      <header className={styles.Header} ref={headEl}>
        <Menu className={styles.menu} onClick={() => setMenuIsOpen(true)} />
        <img src={Logo} alt="" />
        <MenuItems />
        <span
          className={styles['cart-btn']}
          aria-valuenow={totalAmount}
          onClick={() => setCartIsExpanded(!cartIsExpanded)}
        >
          <Cart className={styles.cart} />
        </span>
        <img className={styles.avatar} src={Avatar} alt="" />
      </header>

      <Basket visible={cartIsExpanded} anchor={anchor} />

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

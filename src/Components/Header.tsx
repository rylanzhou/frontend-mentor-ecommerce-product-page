import React, { useState } from 'react';

import { Cart, Close, Menu } from '../assets/icons';
import { Avatar } from '../assets/images';
import Logo from '../assets/logo.svg';

import styles from '../styles/Header.module.scss';

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
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <header className={styles.Header}>
        <Menu className={styles.menu} onClick={() => setMenuIsOpen(true)} />
        <img src={Logo} alt="" />
        <Cart className={styles.cart} />
        <img className={styles.avatar} src={Avatar} alt="" />
      </header>

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

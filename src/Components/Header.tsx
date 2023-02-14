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
        <img src={Menu} alt="" onClick={() => setMenuIsOpen(true)} />
        <img src={Logo} alt="" />
        <img src={Cart} alt="" style={{ marginLeft: 'auto' }} />
        <img className={styles.avatar} src={Avatar} alt="" />
      </header>

      <div
        className={styles.mask}
        aria-hidden={!menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      ></div>

      <div className={styles['menu-drawer']} aria-hidden={!menuIsOpen}>
        <img src={Close} alt="" onClick={() => setMenuIsOpen(false)} />
        <MenuItems />
      </div>
    </>
  );
}

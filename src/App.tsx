import React, { useState } from 'react';

import Carousel from './Components/Carousel';
import Header from './Components/Header';

import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <main>
        <Carousel />
      </main>
    </div>
  );
}

export default App;

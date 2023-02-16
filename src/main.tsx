import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ShoppingProvider from './ShoppingContext';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShoppingProvider>
      <App />
    </ShoppingProvider>
  </React.StrictMode>,
);

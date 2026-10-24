import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componets/header/Header';
import HomePage from './componets/home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header />
      <HomePage />
    </>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componets/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <h1>Midnight Arcade Library</h1>
  </React.StrictMode>
);


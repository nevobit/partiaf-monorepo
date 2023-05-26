import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';
import './styles/variables.css';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

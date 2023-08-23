import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <BrowserRouter>
=======
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
>>>>>>> main
    <App />
  </BrowserRouter>,
);

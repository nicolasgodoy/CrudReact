import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap primero
import './index.css'; // Nuestras mejoras después para que pisen a Bootstrap
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


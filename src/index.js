import React from 'react';
import ReactDOM from 'react-dom/client';
import './services/firebase/initializeFirebase.js'; 
import App from './App';
import './index.css'; 
import "./font/Raleway-Light.ttf";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



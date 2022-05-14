import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 
import { CartContextProvider } from './store/cart-context';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrJyANjIiTg1cVl1HvNluuN-M2u6NiLYg",
  authDomain: "sunspot-93034.firebaseapp.com",
  projectId: "sunspot-93034",
  storageBucket: "sunspot-93034.appspot.com",
  messagingSenderId: "142813898280",
  appId: "1:142813898280:web:8e8f28baac604d95f0771d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

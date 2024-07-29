import { BrowserRouter } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./redux/store";
import { Provider } from 'react-redux';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Header from './layout/header/Header.jsx';
import Footer from './layout/footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Header />
     <App />
     <Footer />
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import { Toaster  } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Toaster position="top-center"
  reverseOrder={false}/>
    <App />
    
    </>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

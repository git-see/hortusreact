import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/app.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// HERE: $ npm i react-router-dom => package.json => BrowserRouter (Routes/Route) & add NavLink with condition (isActive:bool)
reportWebVitals();

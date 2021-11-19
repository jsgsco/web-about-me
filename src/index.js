import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto:100,400,500', 'sans-serif']
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
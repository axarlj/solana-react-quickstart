import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


var panzoom = require('panzoom')

var element = document.querySelector('#scene')

var instance = panzoom(element, {
  maxZoom: 180,
  minZoom: 5,
  initialX: 0,
  initialY: 0,
  initialZoom: 6,
  bounds: true,
  boundsPadding: 0.1
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

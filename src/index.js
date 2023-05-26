import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useScript from './useScript';

const root = ReactDOM.createRoot(document.getElementById('root'));
const CCP = props => {
    useScript('/ccp-script.js');
  }

root.render(

  <React.StrictMode>
    <CCP></CCP>
    <App>
      
      
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

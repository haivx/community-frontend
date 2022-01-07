import React from 'react';
import ReactDOM from 'react-dom';
import { Global as GlobalStyle, ThemeProvider } from '@emotion/react';

import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { globalStyle, theme } from './styles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle styles={globalStyle} />
  <ThemeProvider theme={theme}>
    <App />
    <ToastContainer />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

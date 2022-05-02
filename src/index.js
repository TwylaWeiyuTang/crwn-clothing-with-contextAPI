import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
// we need to wrap our app with PersistGate, so our app can obtain the ability to check if there
// is any thing stored in our local storage session and persist them

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import store from './redux/store'
import {persistor} from './redux/store'
import CartProvider from './providers/cart/cartProvider'

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </CartProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

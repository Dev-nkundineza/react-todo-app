import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer);
const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app,document.getElementById('root'));

reportWebVitals();

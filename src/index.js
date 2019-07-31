import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/App';
import store from './store';
import './assets/css/signUp.scss';
import './assets/css/nav.scss';
import './assets/css/redFlag.scss';

render(
  <Provider store={store}>
    <ToastContainer autoClose={3000} />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

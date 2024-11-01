import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import '../public/boxicons-2.0.9/css/boxicons.min.css'
import './assets/boxicons-2.0.9/css/boxicons.min.css'

import {Provider} from 'react-redux'
import {store} from './store/index'
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  
  <Main/>
  </BrowserRouter>

  
</Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

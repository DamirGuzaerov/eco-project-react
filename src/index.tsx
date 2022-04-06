import React from 'react';
import ReactDOM from 'react-dom';
import 'swiper/css/navigation'
import 'swiper/css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import mainStore from "./stores/mainStore";
import {Provider} from 'mobx-react'
import {ModalConstructor} from "./components/modals/modalConsturctor/modalConstructor";
import axios from "axios";


axios.defaults.baseURL = 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1';

ReactDOM.render(
  <React.StrictMode>
      <Provider {...mainStore}>
          <BrowserRouter>
            <App/>
              <ModalConstructor/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from "react-dom/client";
import store from "./store/store"
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
  </Provider>
);


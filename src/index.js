import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createContext } from 'react';

import Store from './store/store';
const store = new Store();

export const Context = createContext({
  store,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);

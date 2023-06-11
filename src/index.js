// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter basename="/learning-managment-system">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';

import Store from './store/store';
const store = new Store();

export const Context = createContext({
  store,
});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// import './index.css';
// import * as React from 'react';
// import App from './App';
// import { createRoot } from 'react-dom/client';

// interface State {
//     store: Store,
// }

// import Store from './store/store'
// const store = new Store();

// export const Context = createContext<State>({
//     store,
// })

// const root = createRoot(document.getElementById('root'));

// root.render(
//     <Context.Provider value = {{store}}
// <App />
// </Context.Provider>
// );

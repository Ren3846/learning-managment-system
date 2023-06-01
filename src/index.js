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
import * as React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

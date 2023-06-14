import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './assets/counter-reducer';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

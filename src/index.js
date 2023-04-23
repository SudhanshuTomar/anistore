import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter provides all functionalities of react routing to the components that lie in it */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);



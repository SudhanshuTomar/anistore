import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* BrowserRouter provides all functionalities of react routing to the components that lie in it */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);



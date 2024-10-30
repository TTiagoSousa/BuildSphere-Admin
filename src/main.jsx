import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import NavsContext from './Contexts/Navs_Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavsContext>
      <App />
    </NavsContext>
  </BrowserRouter>,
)

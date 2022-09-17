import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextFun from './components/ContextFun';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextFun>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
  </ContextFun>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

import InititalComponent from './init';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/hh-test-react-posts/'>
      <InititalComponent>
        <Router />
      </InititalComponent>
    </BrowserRouter>
  </React.StrictMode>,
)

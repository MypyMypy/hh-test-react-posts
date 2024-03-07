import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { InititalComponent } from './init';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/hh-test-react-posts/">
        <InititalComponent>
          <Router />
        </InititalComponent>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);

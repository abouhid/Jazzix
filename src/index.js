import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>

      <Router>
        <App />
      </Router>
    </ContextProvider>

  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css"; 
import * as catchFetch from './catchFetch'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
      
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
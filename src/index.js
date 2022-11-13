import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import firebase from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
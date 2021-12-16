import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App configuration={window.appConfig} />,
  </React.StrictMode>,
  
  document.getElementById('root')
);



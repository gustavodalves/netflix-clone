import './index.css';

import Home from './pages/Home/Home';
import React from 'react';
import ReactDOM from 'react-dom';

// import Splash from './pages/Splash/Splash'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
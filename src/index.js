import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'antd/dist/antd.dark.css'; // Introduce the official dark less style entry file
import App from './App';
import Auth from "./providers/auth";

ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <App />
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);


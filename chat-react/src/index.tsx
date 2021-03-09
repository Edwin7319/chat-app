import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import ChatApp from './app/ChatApp';

ReactDOM.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>,
  document.getElementById('root')
);

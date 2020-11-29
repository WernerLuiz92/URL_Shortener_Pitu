import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCompressAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';

library.add(faCheckSquare, faCopy, faCompressAlt, faExclamationTriangle, faAngellist);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
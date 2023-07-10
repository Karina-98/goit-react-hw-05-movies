import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ContextMovie } from 'components/Context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <ContextMovie>
        <App />
        </ContextMovie>
    </BrowserRouter>
  </React.StrictMode>
);

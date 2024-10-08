// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MaterialUIProvider from './ui/providers/materialUIProvider';

ReactDOM.render(
  <React.StrictMode>
    <MaterialUIProvider>
      <App />
    </MaterialUIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

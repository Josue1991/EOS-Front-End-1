import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import MaterialUIProvider from './ui/providers/materialUIProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <MaterialUIProvider>
        <App />
      </MaterialUIProvider>
    </React.StrictMode>
  );
} else {
  console.error("El elemento con ID 'root' no se encontró.");
}
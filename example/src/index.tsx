import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OpenCvProvider } from 'use-cv';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <OpenCvProvider>
      <App />
    </OpenCvProvider>
  </React.StrictMode>
);

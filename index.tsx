// polyfill para toSorted (copie exatamente isso)
if (!Array.prototype.toSorted) {
  Object.defineProperty(Array.prototype, 'toSorted', {
    value: function(compareFn) {
      return [...this].sort(compareFn);
    },
    writable: true,
    configurable: true,
  });
}

// Agora as outras importações do seu app normalmente
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// restante do código...

import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import "./index.css";
import App from "./App";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

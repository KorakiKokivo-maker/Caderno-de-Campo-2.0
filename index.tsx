if (!Array.prototype.toSorted) {
  // Se o JavaScript não tiver o método toSorted...

  Object.defineProperty(Array.prototype, 'toSorted', {
    // Define para o Array o método 'toSorted' igual a:

    value: function(compareFn?: (a: any, b: any) => number) {
      // Função que recebe uma função para comparar elementos (opcional)

      return [...this].sort(compareFn);
      // Cria uma cópia do array atual e usa o sort tradicional para ordenar
    },

    writable: true,
    configurable: true,
    // Permite mexer e modificar essa função depois, se quiser
  });
}
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

import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import "./index.css";
import App from "./App";

// Sua configuração do Firebase (ajuste as chaves conforme seu projeto)
const firebaseConfig = {
  apiKey: "sua_apiKey_aqui",
  authDomain: "seu_authDomain_aqui",
  projectId: "seu_projectId_aqui",
  storageBucket: "seu_storageBucket_aqui",
  messagingSenderId: "seu_messagingSenderId_aqui",
  appId: "seu_appId_aqui",
};

// Inicializa o Firebase
initializeApp(firebaseConfig);

// Inicializa o ReactDOM raiz e renderiza o app
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

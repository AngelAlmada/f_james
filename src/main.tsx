import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./i18n"; // ✅ Importa la configuración de idiomas

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter> {/* ✅ Router solo aquí */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")).render(
    <ClerkProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClerkProvider>,
);

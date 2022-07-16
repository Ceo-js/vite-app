import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
import "./scripts/load";
import "./index.css";

ReactDOM.createRoot( document.querySelector( "appbar" ) ).render(
    <React.StrictMode>
        <Appbar />
    </React.StrictMode>
);

ReactDOM.createRoot( document.querySelector( "drawer" ) ).render(
    <React.StrictMode>
        <Drawer />
    </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)




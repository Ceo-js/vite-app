import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Appbar from "./Appbar";
import Drawer from "./Drawer";
// import "./scripts/load";
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



window.addEventListener("load", function() {

    var drawer = document.querySelector( "drawer" );
    var drawerSwitch = document.querySelector( "appbar-left" );
    var displayDrawer = document.querySelector( "appbar-right" );
    
    var body = document.querySelector( "drawer" ); 
    var appbar = document.querySelector( "appbar-center" ); 

    body.addEventListener("click", function() {
        this.style.background = "#ff9e00";
        appbar.style.display = "none";
    });

    drawerSwitch.addEventListener( "click", function() {
        switch( drawer.style.width ) {
            case "": drawer.style.width = "350px";
            break;
            case "68px": drawer.style.width = "350px";
            break;
            case "350px": drawer.style.width = "68px";
            break;
        }
    } );

    displayDrawer.addEventListener( "click", function() {
        switch( drawer.style.display ) {
            case "": drawer.style.display = "block";
            break;
            case "block": drawer.style.display = "none";
            break;
            case "none": drawer.style.display = "block";
        }
    } );
});
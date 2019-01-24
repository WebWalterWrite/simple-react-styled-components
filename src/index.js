import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Import App
import App from "./app";

// import global JSS
import { createGlobalStyle } from "styled-components";

/*

Définir un style global pour l'ensenmble de l'application.
exemple : la taille de la police, le margin/padding, mediaqueries, etc...
*/
const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }

  body, html{
    width:100vw;
    height: 100vh;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  rootElement
);

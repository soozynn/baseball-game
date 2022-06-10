import React from "react";
import { createGlobalStyle } from "styled-components";
import GameDescription from "./components/GameDescription";

import NumberBaseball from "./components/NumberBaseball";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #77d5fb;
    font-family: "Acme", sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <GameDescription />
        <NumberBaseball />
      </div>
    </>
  );
}

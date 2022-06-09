import React from "react";
import { createGlobalStyle } from "styled-components";

import NumberBaseball from "./components/NumberBaseball";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Caveat:wght@600&family=Gochi+Hand&family=Nanum+Brush+Script&family=Nanum+Pen+Script&family=Quintessential&display=swap');

  body, html {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: "Acme", sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <NumberBaseball />
      </div>
    </>
  );
}

import { createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle `
:root {
--dorado :#ffaa20;
--naranja: #ff8528;
--gris: #282829;
--negro: #000000;
--plata1:#f9f9f9;
--plata2: #eaecf0;
--plata3:#d1d6da;
--plata4: #d7dde3;
--rojo: #ff2e34;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  html {
  font-size: 62.5%;
  //font-size:calc(12px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))
  font-family: Poppins, system-ui;
  }

html, body {
height:100%;
}

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

`

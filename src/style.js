import { createGlobalStyle } from 'styled-components';

export const style = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: left;
    display: flex;
    font-family: "Helvetica"; 
    height: 100vh;
    justify-content: center;
  }
  `
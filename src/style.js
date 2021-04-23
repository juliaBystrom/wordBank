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
    ${'' /* background: ${props => props.theme.main};
    color: ${props => props.theme.secondary};  */}
    display: flex;
    font-family: "Helvetica"; 
    height: 100vh;
    justify-content: center;
  }
  `
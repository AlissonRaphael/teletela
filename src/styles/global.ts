import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #da0037;
    --primary-light: #ff5361;
    --primary-dark: #a00012;

    --secondary: #444444;
    --secondary-light: #6f6f6f;
    --secondary-dark: #1d1d1d;

    --black: #171717;
    --grey: #EDEDED;
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`
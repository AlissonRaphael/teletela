import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../assets/cover.jpg'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #da0037;
    --primary-light: #ff5361;
    --primary-light-text: #fff;
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
    color: var(--primary-light-text);
    background: url(${BackgroundImage});
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
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
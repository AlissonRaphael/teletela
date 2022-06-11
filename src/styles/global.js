import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../assets/noise.jpg'

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
    background: transparent url(${BackgroundImage}) repeat 0 0;
    background-size: 400px 400px;
    animation: noise-animation 0.1s infinite;
    -webkit-font-smoothing: antialiased;

    @keyframes noise-animation {
      0% { background-size: 200px 200px }
      20% { background-size: 130px 130px }
      40% { background-size: 400px 400px }
      60% { background-size: 80px 80px }
      80% { background-size: 500px 500px }
      100% { background-size: 350px 350px }
    }
  }

  body, input, textarea, button {
    font-family: monospace;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  p {
    margin: 0.2rem 0rem;
  }
`
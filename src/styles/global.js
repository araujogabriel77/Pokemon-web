import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 45%;
  }

  body {
    background: #eee;
    font: 1.6rem 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  @media (min-width: 425px) {
    html {
      font-size: 50%;
    }
  }
  @media (min-width: 768px) {
    html {
      font-size: 62.5%;
    }
  }
`;

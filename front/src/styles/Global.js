import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  :root {
    --purple: #5431D6;
  }

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body{
    background: #32323E;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
  }

  input, select, button {
    font-family: 'Open Sans', sans-serif;
  }

  .container {
    max-width: min(90vw, 960px);
    margin: 0 auto;
  }
`

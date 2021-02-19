import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    background-color: #FAF5FF;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    /* Mobile */
    @media (max-width: 425px) {
      background-color: transparent;
    }
  }
  button, input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

`
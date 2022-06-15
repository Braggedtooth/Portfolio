import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: 'Exo', sans-serif;
    margin: 0;
    padding: 0;
    color: ${(props) => (props.theme ? 'white' : 'black')};
  }
  `

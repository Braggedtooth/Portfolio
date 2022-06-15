import { createGlobalStyle } from 'styled-components'
import Theme from '../types/theme'

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    font-family: 'Exo', sans-serif;
    margin: 0;
    padding: 2em;
    height: 90vh;
    background-color: ${(props) =>
      props.theme.colorScheme === 'light'
        ? props.theme.colors.white
        : props.theme.colors.black};
    color: ${(props) =>
      props.theme.colorScheme === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
  }
  `
export default GlobalStyle
import { openSans } from "./helpers"
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    ${openSans};
    font-size: 13px;
  }
`
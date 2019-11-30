import styled from 'styled-components'
import { input, rounded, grey } from "../helpers"

const Dropdown = styled.select`
  ${input}
  ${rounded()}
  border: 1px solid ${grey};
`

export default Dropdown

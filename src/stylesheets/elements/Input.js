import styled from 'styled-components'
import { input, rounded, grey } from '../helpers'

const Input = styled.input`
  ${input}
  ${rounded('10px')}
  border: 1px solid ${grey};
`

export default Input

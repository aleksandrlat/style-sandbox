import { css } from 'styled-components'

export const input = css`
  font-family: inherit;
  font-size: inherit;
  border: none;
  color: #333;
`

export const rounded = (px = '5px') => css`
  border-radius: ${px};
`

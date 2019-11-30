import styled, { css } from 'styled-components'
import { primary } from "../../helpers"
import { lighten } from 'polished'

const Button = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #333;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
  line-height: 34px;
  margin: 0;
  max-width: 100%;
  min-width: 100px;
  overflow: hidden;
  padding: 0 10px;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  user-select: none;
  vertical-align: baseline;
  white-space: nowrap;

  ${({ outline, color = primary }) => outline && css`
    background-color: #fff;
    border: 1px solid ${color};
    color: ${color};
  
    &:hover {
      background-color: ${color};
      color: #fff;
    }
  `}
  
  ${({ color, outline }) => color && !outline && css`
    background-color: ${color};
    color: #fff;

    &:hover {
      background-color: ${lighten(0.05, color)};
    }
  `}

  &[disabled] {
    background-color: #f2f2f2;
    color: #ccc;
    cursor: default;

    &:hover {
      background-color: #f2f2f2;
      color: #ccc;
    }
  }
`

export default Button

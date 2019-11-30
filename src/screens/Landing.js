import React from "react"
import styled from 'styled-components'

import LoginForm from "../components/LoginForm"
import Label from "../stylesheets/elements/Label"

const StyledLoginForm = styled(LoginForm)`
  & > ${Label} {
    color: blue;
  }
`

function LandingScreen({ children }) {
  return (
    <div>
      <h1>Landing Screen</h1>

      <StyledLoginForm />
    </div>
  )
}

export default LandingScreen

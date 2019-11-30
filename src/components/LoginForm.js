import React from "react"
import styled from 'styled-components'

import Form from "../stylesheets/elements/Form"
import Label from "../stylesheets/elements/Label"
import Input from "./Input"
import Button from "../stylesheets/elements/buttons/Button"
import FullWidth from "../stylesheets/elements/buttons/FullWidth"
import Narrow from "../stylesheets/elements/buttons/Narrow"
import QNav from "../stylesheets/elements/buttons/QNav"
import Small from "../stylesheets/elements/buttons/Small"
import { primary, secondary, green, red } from '../stylesheets/helpers'

const ButtonList = styled.div`
  margin-top: 10px;
  width: 500px;
  ${Button} {
    margin-bottom: 10px;
  }
  ${Button}:last-of-type {
    margin-bottom: 0;
  }
`

function LoginForm({ className }) {
  return (
    <Form className={className}>
      <Label>Email</Label>
      <Input />

      <Label>Password</Label>
      <Input />

      <ButtonList>
          <Button>Login</Button> <br />
          <FullWidth color={red}>Login</FullWidth> <br />
          <Narrow color={secondary} outline>Login</Narrow> <br />
          <QNav outline>Login</QNav> <br />
          <Small color={green} outline>Login</Small> <br />
          <Button color={primary}>Login</Button> <br />
      </ButtonList>
    </Form>
  )
}

export default LoginForm

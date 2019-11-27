import React from "react"
import classNames from "classnames"

import Label from "../../components/Label/index.jsx"
import Input from "../../components/Input/index.jsx"
import Button from "../../components/Button/index.jsx"
import LoginForm from "../../components/LoginForm/index.jsx"
import style from "./style.scss"

function LandingScreen({ children }) {
  return (
    <div>
      <h1>Landing Screen</h1>

      <LoginForm>
        {({ style: loginFormStyle }) => (
          <>
            <Label className={classNames(loginFormStyle.label, style.label)}>
              Email
            </Label>
            <Input />

            <Label className={classNames(loginFormStyle.label, style.label)}>
              Password
            </Label>
            <Input />

            <Button>Login</Button>
          </>
        )}
      </LoginForm>
    </div>
  )
}

export default LandingScreen

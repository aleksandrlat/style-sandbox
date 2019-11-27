import React from "react"

import Label from "../../components/Label/index.jsx"
import Input from "../../components/Input/index.jsx"
import Button from "../../components/Button/index.jsx"
import LoginForm from "../../components/LoginForm/index.jsx"

function LoginScreen() {
  return (
    <div>
      <h1>Login Screen</h1>

      <LoginForm>
        {({ style: loginFormStyle }) => (
          <>
            <Label className={loginFormStyle.label}>Email</Label>
            <Input />

            <Label className={loginFormStyle.label}>Password</Label>
            <Input />

            <Button>Login</Button>
          </>
        )}
      </LoginForm>
    </div>
  )
}

export default LoginScreen

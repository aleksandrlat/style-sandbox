import React from "react"
import classNames from "classnames"

import Label from "../Label/index.jsx"
import Input from "../Input/index.jsx"
import Button from "../Button/index.jsx"
import style from "./style.scss"

function LoginForm({ labelClassName }) {
  return (
    <form className={style.wrapper}>
      <Label className={classNames(style.label, labelClassName)}>Email</Label>
      <Input />

      <Label className={classNames(style.label, labelClassName)}>
        Password
      </Label>
      <Input />

      <Button>Login</Button>
    </form>
  )
}

export default LoginForm

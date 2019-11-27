import React from "react"
import classNames from "classnames"

import Label from "../Label/index.jsx"
import Input from "../Input/index.jsx"
import Button from "../Button/index.jsx"
import style from "./style.scss"

function LoginForm({ className }) {
  return (
    <form className={classNames(style.wrapper, className)}>
      <Label className={style.label}>Email</Label>
      <Input />

      <Label className={style.label}>Password</Label>
      <Input />

      <Button>Login</Button>
    </form>
  )
}

export default LoginForm

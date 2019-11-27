import React from "react"

import style from "./style.scss"

function LoginForm({ children }) {
  return <form className={style.wrapper}>{children({ style })}</form>
}

export default LoginForm

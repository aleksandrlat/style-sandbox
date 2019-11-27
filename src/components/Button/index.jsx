import React from "react"
import classNames from "classnames"

import style from "./style.scss"

function Button({ children, className }) {
  return (
    <button className={classNames(style.wrapper, className)}>{children}</button>
  )
}

export default Button

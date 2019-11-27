import React from "react"
import classNames from "classnames"

import style from "./style.scss"

function Label({ children, className }) {
  return (
    <label className={classNames(style.wrapper, className)}>{children}</label>
  )
}

export default Label

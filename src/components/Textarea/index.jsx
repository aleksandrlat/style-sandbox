import React from "react"
import classNames from "classnames"

import style from "./style.scss"

function Textarea({ className }) {
  return <textarea className={classNames(style.wrapper, className)} />
}

export default Textarea

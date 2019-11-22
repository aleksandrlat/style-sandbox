import React from "react"

import style from "./style.scss"

function Dropdown() {
  return (
    <select className={style.wrapper}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
  )
}

export default Dropdown

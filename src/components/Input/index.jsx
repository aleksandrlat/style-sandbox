import React from "react"

import style from "./style.scss"

function Input({ error }) {
  return (
    <>
      <input className={style.wrapper} />
      {error && <div className={style.errorMessage}>{error}</div>}
    </>
  )
}

export default Input

import React from "react"

import LoginForm from "../../components/LoginForm/index.jsx"
import style from "./style.scss"

function LandingScreen({ children }) {
  return (
    <div>
      <h1>Landing Screen</h1>

      <LoginForm className={style.form} />
    </div>
  )
}

export default LandingScreen

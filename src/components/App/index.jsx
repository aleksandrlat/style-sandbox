import React from "react"

import Input from "../Input/index.jsx"
import Dropdown from "../Dropdown/index.jsx"
import Textarea from "../Textarea/index.jsx"

import style from "./style.scss"

function App() {
  return (
    <>
      <label>First name</label>
      <Input />

      <label>Last name</label>
      <Input error="Last name is required" />

      <label>Number</label>
      <Dropdown />

      <label>Comments</label>
      <Textarea className={style.commentsTextarea} />
    </>
  )
}

export default App

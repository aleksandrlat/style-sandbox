import React from "react"
import { render } from "react-dom"

import "./stylesheets/reset.css"
import "./stylesheets/main.scss"

import App from "./components/App/index.jsx"

render(<App />, document.getElementById("app"))

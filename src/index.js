import React from "react"
import { render } from "react-dom"

import ResetStyles from "./stylesheets/reset"
import MainStyles from "./stylesheets/main"

import App from "./components/App"

render(<>
    <ResetStyles />
    <MainStyles />
    <App />
</>, document.getElementById("app"))

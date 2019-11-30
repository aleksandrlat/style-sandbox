import React from "react"
import InputEl from "../stylesheets/elements/Input"
import ErrorMessage from "../stylesheets/elements/ErrorMessage"

function Input({ error }) {
    return (
        <>
            <InputEl />
            {error && <ErrorMessage as="div">{error}</ErrorMessage>}
        </>
    )
}

export default Input

import React, { useState } from 'react'
import "./MainComponent.css"
function MainComponent() {

    const [input, setInput] = useState(0)
    function handleChange(event) {
        setInput(event.target.value)

    }
    function addButton() {
        setOutput(Number(input) + Number(output))
    }

    let [output, setOutput] = useState(100)

    function subtractButton() {
        setOutput(Number(output) - Number(input))
    }


    return (
        <div className="myMainComponent">
            <p> <input onChange={handleChange} type="number" /> </p>
            <button onClick={addButton}> Addition </button>
            <button onClick={subtractButton}> Subtraction </button>
            <h1> Result</h1>
            <p className="Result"> {output} </p>
        </div>
    )
}

export default MainComponent

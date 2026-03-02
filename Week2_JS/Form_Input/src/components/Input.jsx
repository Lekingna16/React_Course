import { useState } from "react"


function Input({ inputName }) {

    const [input, setInput] = useState("")
    return (
        <div>
            <p><strong>{inputName}: </strong> {input}</p>
            <input type="text" onChange={(e) => setInput(e.target.value)} placeholder={`Enter the ${inputName}`} />
        </div>
    )
}

export default Input
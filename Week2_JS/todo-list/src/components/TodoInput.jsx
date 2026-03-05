import { useState } from "react"


function TodoInput({ addTodo }) {

    const [input, setInput] = useState("")

    const handleInput = () => {
        const value = input.trim();

        if (!value) return;

        addTodo(value);
        setInput("");
    };


    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder='Enter your task' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleInput}>Add</button>
        </div>
    )
}

export default TodoInput
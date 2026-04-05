import { useState } from "react"

const CounterApp = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDescriment = () => {
        setCount((prev) => {
            return prev > 0 ? prev - 1 : 0
        })
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDescriment}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default CounterApp
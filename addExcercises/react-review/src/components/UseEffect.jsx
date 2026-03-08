import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => console.log(`Count change: ${count}`));


    const increase = () => {
        setCount(count + 1)

    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)

        }
    }

    const reset = () => {
        setCount(0)

    }

    return (
        <div style={{ margin: 20 }}>
            <h2>Counter</h2>
            <h4>Count: {count}</h4>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default UseEffect;
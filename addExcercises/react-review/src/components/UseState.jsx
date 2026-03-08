import { useState } from "react";

function UseState() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
        console.log(`Count is: ${count}`);

    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
            console.log(`Count is: ${count}`);
        }
    }

    const reset = () => {
        setCount(0)
        console.log(`Count is: ${count}`);
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

export default UseState;
import { useEffect, useRef, useState } from "react";


function UseRef() {
    const [count, setCount] = useState(0);

    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current += 1;
    })


    return (
        <div>
            <p>Count: {count}</p>
            <p>Render time: {renderCount.current}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default UseRef
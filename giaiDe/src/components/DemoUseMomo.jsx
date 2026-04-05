import { useMemo, useState } from "react";


function DemoUseMomo() {

    const total = useMemo(() => {
        let sum = 0;
        for (let i = 1; i < 1_000_000_000; i++) {
            sum += i;
        }
        return sum

    }, [])

    const [count, setCount] = useState(0)

    return (
        <div>
            <p>{total}</p>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    )
}

export default DemoUseMomo
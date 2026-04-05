import { useCallback, useState } from "react"
import Childrent from "./Childrent"

function DemoUseCallback() {

    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(() => {
        setCount((pre) => pre + 1)
    }, [])


    return (
        <div>
            <h1>{count}</h1>
            <Childrent onIncrement={handleIncrement} />
        </div>
    )
}

export default DemoUseCallback
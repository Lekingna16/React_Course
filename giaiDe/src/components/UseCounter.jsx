
import { useState } from "react"
function UseCounter(initValue = 0) {

    const [count, setCount] = useState(initValue)

    const increment = () => {
        setCount((pre) => pre + 1)
    }

    const decrement = () => {
        setCount((pre) => {
            return pre > 0 ? pre - 1 : 0
        })
    }

    const reset = () => {
        setCount(initValue)
    }

    return {
        count, increment, decrement, reset
    }


}

export default UseCounter
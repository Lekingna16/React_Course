import { useState } from "react"


function CounterApp() {
    const [count, setCount] = useState(0)




    return (
        <div>
            <h2 id="counter" style={{ color: count > 10 ? 'red' : 'black' }}>{count}</h2>
            <div className="button-list">
                <button className="add" onClick={() => setCount(count + 1)}>+</button>
                <button className="substract" onClick={() => setCount((count - 1) < 0 ? 0 : count - 1)}>-</button>
                <button className="reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default CounterApp
import { useReducer } from "react";


function CounterApp2() {

    const initValue = 0;

    const INCREMET_ACTION = 'increment'
    const DESCRIMENT_ACTION = 'descriment'
    const RESTET_ACTION = 'reset'

    const reducer = (state, action) => {
        switch (action) {
            case INCREMET_ACTION:
                return state + 1

            case DESCRIMENT_ACTION:
                return state > 0 ? state - 1 : 0

            case RESTET_ACTION:
                return state = 0

            default: throw new Error('Invalid action')
        }
    }

    const [count, dispatch] = useReducer(reducer, initValue)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(INCREMET_ACTION)}>Increment</button>
            <button onClick={() => dispatch(DESCRIMENT_ACTION)}>Decrement</button>
            <button onClick={() => dispatch(RESTET_ACTION)}>Reset</button>
        </div>
    )
}

export default CounterApp2
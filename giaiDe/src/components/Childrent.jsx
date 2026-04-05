
import { memo } from "react"
const Childrent = ({ onIncrement }) => {
    console.log("Re-render");

    return (
        <div>
            <button onClick={onIncrement}>
                Increment
            </button>
        </div>
    )
}

export default memo(Childrent)
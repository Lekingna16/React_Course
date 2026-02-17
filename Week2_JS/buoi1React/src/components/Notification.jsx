import { useState } from "react"

const Notification = () => {

    const [state, setState] = useState('primary')

    const color = state === 'primary' ? 'blue' : state === 'warning' ? 'yellow' : 'green'

    const style = {
        padding: '20px',
        backgroundColor: '#e8f5e9',
        border: '1px solid #ddd',
        borderLeft: `5px solid ${color}`,
        marginBottom: '15px',
        borderRadius: '4px',
        color: '#333'
    }



    return (
        <div>

            <div style={style}>
                <p>This is <strong>Notification</strong></p>
            </div>
            <button onClick={() => setState('success')}>SUCCESS</button>
            <button onClick={() => setState('warning')}>WARNING</button>
            <button onClick={() => setState('primary')}>PRIMARY</button>

        </div>
    )
}

export default Notification
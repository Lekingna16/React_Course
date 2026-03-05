

function StatusBadge({ status }) {

    let color = status === 'offline' ? 'gray' : status === 'busy' ? 'red' : 'green'


    return (
        <div>

            <button id="btn-change-background" onClick={() => document.querySelector('body').style.background = color}>Change Background</button>

        </div>
    )
}

export default StatusBadge
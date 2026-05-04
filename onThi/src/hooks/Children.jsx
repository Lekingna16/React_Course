import React from 'react'

const Children = ({ handleDelete }) => {
    console.log('render lai');
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default React.memo(Children)
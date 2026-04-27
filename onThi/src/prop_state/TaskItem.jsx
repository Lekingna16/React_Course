import React, { useState } from 'react'

const TaskItem = ({ task, handleRemove }) => {
    const [isExpand, setIsExpand] = useState(false)
    const handleExpand = () => {
        setIsExpand(!isExpand)
    }

    return (
        <div>
            <h1> {task.title}</h1>
            <button onClick={handleExpand}>Expand</button>
            {isExpand &&
                <div>
                    <p>{task.description}</p>
                    <p>{task.staus}</p>
                    <p>{task.priority}</p>
                    <p>{task.dueDate}</p>
                    <p>{task.createdAt}</p>
                </div>}
            <button onClick={() => handleRemove(task.id)}>Remove</button>
        </div>
    )
}

export default TaskItem
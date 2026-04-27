import React, { useState } from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ taskList }) => {
    const [tasks, setTasks] = useState(taskList)
    const handleRemove = (id) => {
        const newTaskList = tasks.filter((task) => task.id !== id)
        setTasks(newTaskList)
    }
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <TaskItem key={task.id} task={task} handleRemove={handleRemove} />
                )
            })}

        </div>
    )
}

export default TaskList
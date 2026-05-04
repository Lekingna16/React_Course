import React, { useCallback, useState } from 'react'
import Children from './Children'

const ParentCom = () => {
    const [todos, setTodos] = useState([
        'Lam viec', 'An uong', 'Di choi', 'Di bien', 'Di an'
    ])


    const handleDelete = useCallback((work) => {
        const newTodos = todos.filter((todo) => todo !== work)
        setTodos(newTodos)

    }, [todos])
    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <p>{todo}</p>
                        <Children handleDelete={() => handleDelete(todo)} />
                    </div>
                )
            })}
        </div>
    )
}

export default ParentCom


function TodoItem({ todo, deleteTodo }) {
    return (
        <li>
            <p>{todo.text}</p>
            <button className="btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem
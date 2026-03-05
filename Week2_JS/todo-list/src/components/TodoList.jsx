import TodoItem from "./TodoItem"

function TodoList({ todos, deleteTodo }) {
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
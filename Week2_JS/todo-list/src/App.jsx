import { useState } from "react"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css'


function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
        }
        setTodos([...todos, newTodo]);

    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));

    }
    return (
        <div className="container">
            <h1>Todo App</h1>

            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default App
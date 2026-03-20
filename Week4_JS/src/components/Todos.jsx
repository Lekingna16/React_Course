

function Todos() {

    const url = 'https://mockapi.io/clone/69b97e66e69653ffe6a7de28';
    const todos = {
        "todos": [
            {
                "id": 1,
                "title": "Học React cơ bản",
                "completed": false,
                "createdAt": "2026-03-17"
            },
            {
                "id": 2,
                "title": "Làm bài CRUD với Fetch API",
                "completed": false,
                "createdAt": "2026-03-17"
            },
            {
                "id": 3,
                "title": "Học MongoDB Replica Set",
                "completed": true,
                "createdAt": "2026-03-16"
            }
        ]
    }

    return (
        <div className="container">
            <h1>TO DO LIST APP</h1>
            <div className="addTask">
                <input type="text" placeholder="Enter new task" />
                <input type="datetime-local" />
                <button>Add task</button>
            </div>

        </div>
    )
}

export default Todos
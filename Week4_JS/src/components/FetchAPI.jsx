import { useEffect, useState } from "react"

function FetchAPI() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.status)
                    }
                    return response.json()
                })
                .then((data) => {
                    setUsers(data)
                    setLoading(false)
                })
                .catch((err) => {
                    setError(err.message)
                    setLoading(false)
                })
        }, 3000)
    }, [])

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }
    if (error) {
        return (
            <p style={{ color: 'red' }}>Fetch error: {error}</p>
        )
    }

    return (
        <div>

            {users.map((user, index) => {
                return (
                    <div key={user.id}>
                        <h3>{`User: ${index + 1}`}</h3>
                        <p><strong>Name: </strong> {user.name}</p>
                        <p><strong>Email: </strong> {user.email}</p>
                    </div>
                )

            })}

        </div>
    )



}

export default FetchAPI
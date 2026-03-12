import { useEffect, useState } from "react"

function AsynAPI() {
    const [users, setUsers] = useState([])

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setUsers(data)
            } catch (err) {
                console.error(`Fetch error: ${err}`)
            }
        }

        fetchUser()

    }, [])

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

export default AsynAPI
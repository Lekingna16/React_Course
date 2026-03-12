import { useEffect, useState } from "react"

const FetchId = () => {

    const [id, setId] = useState("");
    const [user, setUser] = useState('')
    let url = `https://jsonplaceholder.typicode.com/users/${id}`
    //let url = `https://jsonplaceholder.typicode.com/users/2`
    const [error, setError] = useState('')

    const getUser = () => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status)
                }
                return response.json()
            })
            .then((data) => {
                setUser(data)
                console.log(data);
            }).catch((err) => {
                setError(err.message)
            })
    }

    if (error) {
        return (
            <p style={{ color: 'red' }}>Fetch error: {error}</p>
        )
    }

    return (
        <div>
            <input type="text" placeholder="Enter ID fetch: "
                onChange={(e) => {
                    setId(e.target.value)
                }}
            />
            <button
                onClick={getUser}
            >Fetch API</button>

            {user && (
                <div>
                    <p><strong>Name: </strong>{user.name}</p>
                    <p><strong>Phone: </strong>{user.phone}</p>
                    <p><strong>Website: </strong>{user.website}</p>
                </div>
            )}
        </div>
    )
}

export default FetchId
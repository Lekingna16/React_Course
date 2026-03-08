import { useState, useEffect } from "react"

function FormInput({ userInput }) {

    const [user, setUser] = useState(userInput);
    const [temp, setTempUser] = useState({})

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div>

            <input
                type="text"
                value={temp.name ?? user.name}
                onChange={(e) =>
                    setTempUser({ ...temp, name: e.target.value })
                }
            />

            <input
                type="text"
                value={temp.age ?? user.age}
                onChange={(e) =>
                    setTempUser({ ...temp, age: e.target.value })
                }
            />

            <input
                type="text"
                value={temp.email ?? user.email}
                onChange={(e) =>
                    setTempUser({ ...temp, email: e.target.value })
                }
            />

            <button onClick={() => setUser({ ...user, ...temp })}>
                Update Information
            </button>

        </div>
    )
}

export default FormInput
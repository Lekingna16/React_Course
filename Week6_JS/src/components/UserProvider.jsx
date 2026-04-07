import React, { useState } from 'react'
import { UserContext } from './UserContext'

function UserProvider({ children }) {
    const [login, setLogin] = useState(false)
    return (
        <div>
            <UserContext.Provider value={{ login, setLogin }}>
                {children}
            </UserContext.Provider>
        </div>

    )
}

export default UserProvider
import React from 'react'
import UserProvider from './UserProvider'
import { UserContext } from './UserContext'
import { useContext } from 'react'


function Login() {
    const { setLogin } = useContext(UserContext)
    return (
        <div>Login
            <button onClick={() => setLogin(true)}>Login</button>
        </div>
    )
}

export default Login
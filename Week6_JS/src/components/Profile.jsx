import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { login } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!login) {
            console.log("Vui long login")
            navigate('/login')
        }
    }, [login])
    return (
        <div>This is page profile</div>
    )
}

export default Profile
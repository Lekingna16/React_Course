import React, { useState } from 'react'

const UserBadge = ({ user }) => {
    const [isOnline, setIsOnline] = useState(false)
    const [state, setState] = useState(user.state)

    const handleOnline = () => {
        setState(state == 'offline' ? 'online' : 'offline')


    }
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Status: {state}</p>
            <button onClick={handleOnline}>IsOnline</button>

        </div>
    )
}

export default UserBadge
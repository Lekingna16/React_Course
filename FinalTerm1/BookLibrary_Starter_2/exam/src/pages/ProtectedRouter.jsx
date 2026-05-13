import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import LoginPage from './LoginPage'
import { userState } from '../store/atoms'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
    const [user, setUser] = useRecoilState(userState)
    if (!user)
        return <Navigate to="/login" replace />
    return children
}

export default ProtectedRouter
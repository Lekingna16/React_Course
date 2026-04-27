import React, { useState } from 'react'

const MultipleInputForm = () => {
    const [info, setInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleEmail = (newEmail) => {
        setInfo(pre => ({
            ...pre,
            email: newEmail
        }))
    }
    const handlePassword = (newPassword) => {
        setInfo(pre => ({
            ...pre,
            password: newPassword
        }))
    }
    const handleConfirmPassword = (newConfirmPassword) => {
        setInfo(pre => ({
            ...pre,
            confirmPassword: newConfirmPassword
        }))
    }

    const handleSubmit = () => {
        alert(`email: ${info.email}, password: ${info.password}, confirmPassword: ${info.confirmPassword}`)
    }


    return (
        <form action="">
            <input type="text" placeholder='Enter your email...' value={info.email} onChange={(e) => handleEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' value={info.password} onChange={(e) => handlePassword(e.target.value)} />
            <input type="password" placeholder='Enter confirm password' value={info.confirmPassword} onChange={(e) => handleConfirmPassword(e.target.value)} />
            <button onClick={handleSubmit}>DangKy</button>
        </form>
    )
}

export default MultipleInputForm
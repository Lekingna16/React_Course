import { useState } from 'react'
import '../css/Login.css'

const Login = ({ type }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (

        <form action="" className={`form-${type} form-${isOpen}`}>
            <button className="close-btn" onClick={(e) => {
                e.preventDefault()
                setIsOpen(false)
            }}>
                x
            </button>
            <div className={`container`}>
                <h2 className="header">Login your account</h2>
                <input type="text" className="name" placeholder='Enter your name' />
                <input type="password" className="password" placeholder='Enter your password' />
                <button className={`btn btn-${type}`}>Login</button>

            </div>
        </form>
    )

}

export default Login
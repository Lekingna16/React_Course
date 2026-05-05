import React, { useReducer } from 'react'

const FormValidation = () => {
    const initData = {
        email: '',
        username: '',
        fullname: '',
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'EMAIL': {
                if (!action.value) {
                    alert('Vui long khong de email rong!')
                    return;
                }
                else {
                    return { ...state, email: action.value }
                }
            }
            case 'USERNAME': {
                if (!action.value) {
                    alert('Vui long khong de username rong!')
                    return
                }
                return { ...state, username: action.value }
            }
            case 'FULLNAME': {
                if (!action.value) {
                    alert('Vui long khong de fullname trong!')
                    return
                }
                return { ...state, fullname: action.value }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initData)

    return (
        <div>
            <input type="text" placeholder='Enter your name' onChange={(e) => dispatch({ type: 'EMAIL', value: e.target.value })} />
            <input type="text" placeholder='Enter your username' onChange={(e) => dispatch({ type: 'USERNAME', value: e.target.value })} />
            <input type="text" placeholder='Enter your fullname' onChange={(e) => dispatch({ type: 'FULLNAME', value: e.target.value })} />
        </div>
    )
}

export default FormValidation
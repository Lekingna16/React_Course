import React, { useState } from 'react'

const FormInputEcho = () => {
    const [value, setValue] = useState("")
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <p>{value}</p>
        </div>
    )
}

export default FormInputEcho
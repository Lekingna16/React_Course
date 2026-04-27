import React, { useEffect, useRef } from 'react'

export const AutoFocus = () => {

    const inputFocus = useRef()
    useEffect(() => {
        inputFocus.current.focus()
    })
    return (
        <div>
            <input type="text" ref={inputFocus} />
        </div>
    )
}

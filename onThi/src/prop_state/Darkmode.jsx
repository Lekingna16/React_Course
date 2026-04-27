import React, { useState } from 'react'

const Darkmode = () => {
    const [theme, setTheme] = useState('light')

    const handleTheme = () => {
        document.body.style.background = theme === 'light' ?
            'black' : 'white'
        setTheme(theme === 'light' ? 'dark' : 'light')

    }
    return (
        <div>
            <button
                onClick={handleTheme}
            >{theme == 'light' ? 'Dark' : 'Light'}</button>
        </div>
    )
}

export default Darkmode
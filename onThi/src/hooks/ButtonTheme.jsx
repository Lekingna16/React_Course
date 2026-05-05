import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { themeState } from './themeAtom'

const ButtonTheme = () => {
    const [theme, setTheme] = useRecoilState(themeState)
    useEffect(() => {
        theme === 'light' ? document.body.style.background = 'white' : document.body.style.background = 'black'
    }, [theme])
    const handleChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div>
            <button onClick={handleChange}>{theme}</button>
        </div>
    )
}

export default ButtonTheme
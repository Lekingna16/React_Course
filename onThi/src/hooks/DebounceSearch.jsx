import React, { useEffect, useState } from 'react'

const DebounceSearch = () => {
    const [input, setInput] = useState('')

    useEffect(() => {

        const timeId = setTimeout(() => {
            console.log("Search....");
        }, 500)

        return (() => clearTimeout(timeId))

    }, [input])
    return (
        <div>
            <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}

export default DebounceSearch
import React, { useEffect, useState } from 'react'

const WindowResize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {

        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (
        <div>
            <p>Width: {size.width}</p>
            <p>height: {size.height}</p>
        </div>
    )
}

export default WindowResize
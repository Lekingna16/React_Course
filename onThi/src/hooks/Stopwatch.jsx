import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0)

    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timeId;

        if (isRunning) {
            timeId = setInterval(() => {
                setTime((pre) => pre + 1)
            }, 1000)

            return () => clearInterval(timeId)
        }
    }, [isRunning])

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60)
        const second = time % 60;

        return (
            (String(hours) + ':' + String(minutes) + ":" + String(second))
        )
    }

    return (
        <div>
            <h1>{formatTime(time)}</h1>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Pause</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    )
}

export default Stopwatch
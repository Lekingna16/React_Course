import React, { useRef, useState } from 'react'
import video from '../assets/video.mp4'


const VideoController = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [isMute, setIsMute] = useState(false)
    const videoController = useRef()

    const handlePlaying = () => {
        if (isPlaying) {
            videoController.current.pause()
        }
        else videoController.current.play()

        setIsPlaying(!isPlaying)
    }

    const handleMute = () => {

        videoController.current.muted = !isMute

        setIsMute(!isMute)


    }
    return (
        <div>
            <video src={video} ref={videoController}></video>
            <button onClick={handlePlaying}>Play</button>
            <button onClick={handlePlaying}>Pause</button>
            <button onClick={handleMute}>Mute</button>

        </div>
    )
}

export default VideoController
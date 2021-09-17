import React from 'react'
import VideoPlayer from 'react-video-js-player'
import picture from './images/1.jpg'
import video from './images/video.mp4'
import './Gallery.css';
function Video(){
    return (
        <div>
            <VideoPlayer 
                src={video}
                poster ={picture}
                width="635px"
                height="360px"
            />
        </div>
    )
}

export default Video;
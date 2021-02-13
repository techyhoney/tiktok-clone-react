import React, { useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import '../css/Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,description}) 
{
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const handleEnterViewport = () => {
        videoRef.current.play();
        setPlaying(true);
      }

    const handleExitViewport  = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
      }

    return (
        <Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>
        <div className="video">
            <video
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}>
            </video>
            <VideoFooter description={description} />
            <VideoSidebar />
        </div>
        </Waypoint>
    )
}
export default Video

import React from 'react';
import './video.css';

const Video = () => {
    return (
        <div className="video-container">
            <iframe title="FantashopV8" src="https://www.youtube.com/embed/v0r6oD6yHU8" frameborder="0" allowFullScreen style={{borderRadius: "10px"}}></iframe>
        </div>
    );
};

export default Video;
import React, { useState, useRef } from 'react';
import './style.less';
// @ts-ignore
import VideoPlayer from 'react-video-js-player';
import { useParams } from 'react-router-dom';
import AudioBackground from 'public/images/audio.jpg';

const Audio = () => {
  const { id } = useParams();
  const time = useRef();
  const state = {
    video: {
      src: 'http://localhost:3001/audio.mp4',
      poster: AudioBackground,
    },
  };

  return (
    <div className="videoContainer">
      <VideoPlayer
        className="videoPlayer"
        controls={true}
        src={state.video.src}
        poster={state.video.poster}
        width="800px"
      />
    </div>
  );
};

export default Audio;

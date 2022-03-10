import React, { useState, useRef } from 'react';
import './style.less';
// @ts-ignore
import VideoPlayer from 'react-video-js-player';
import { useLocation } from 'react-router-dom';
import AudioBackground from 'public/images/audio.jpg';
import { parseUrl } from 'query-string';

const Audio = () => {
  const { search } = useLocation();
  const { url } = parseUrl(search).query;
  const time = useRef();
  const state = {
    video: {
      src: url,
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

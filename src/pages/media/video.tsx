import React, { useState, useRef } from 'react';
import './style.less';
// @ts-ignore
import VideoPlayer from 'react-video-js-player';
import { useLocation, useParams } from 'react-router-dom';
import TagIcon from 'public/images/tag.svg';
import { Modal, Button, Form, Input, Select, Typography } from 'antd';
import { parseUrl } from 'query-string';

const { Option } = Select;

const Stack = ({ children, style }: any) => {
  return <div style={{ display: 'flex', alignItems: 'center', ...style }}>{children}</div>;
};

const Video = () => {
  const { search } = useLocation();
  const { url, thumbnail } = parseUrl(search).query;

  const time = useRef();
  const state = {
    video: {
      src: url,
      poster: thumbnail,
    },
  };

  const onVideoTimeUpdate = (t: any) => {
    time.current = t;
  };

  return (
    <div className="videoContainer">
      <VideoPlayer
        onTimeUpdate={onVideoTimeUpdate}
        className="videoPlayer"
        controls={true}
        src={state.video.src}
        poster={state.video.poster}
        width="auto"
      />
    </div>
  );
};

export default Video;

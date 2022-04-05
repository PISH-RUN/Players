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

const Game = () => {
  const { search } = useLocation();
  const { url, thumbnail } = parseUrl(search).query;

  const time = useRef();

  const onVideoTimeUpdate = (t: any) => {
    time.current = t;
  };

  return (
    <iframe src={url as string} className='w-full h-screen' />
  );
};

export default Game;

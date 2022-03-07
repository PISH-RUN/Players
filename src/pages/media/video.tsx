import React, { useState, useRef } from 'react';
import './style.less';
// @ts-ignore
import VideoPlayer from 'react-video-js-player';
import { useParams } from 'react-router-dom';
import TagIcon from 'public/images/tag.svg';
import { Modal, Button, Form, Input, Select, Typography } from 'antd';

const { Option } = Select;

const Stack = ({ children, style }: any) => {
  return <div style={{ display: 'flex', alignItems: 'center', ...style }}>{children}</div>;
};

const TagModal = ({ open, onClose, time }: any) => {
  // @ts-ignore
  const timeString = !!time ? new Date(parseInt(time * 1000, 10)).toISOString().substr(11, 8) : '';
  const [form] = Form.useForm();

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const onSubmit = () => {
    form.validateFields().then(
      () => console.log(form.getFieldsValue()),
      () => console.log('error')
    );
  };

  return (
    <Modal title="افزودن تگ" visible={open} onOk={onSubmit} onCancel={onClose}>
      <Stack style={{ marginBottom: 16 }}>
        <>
          <Typography style={{ fontWeight: 700, marginLeft: '8px' }}>زمان انتخابی: </Typography>
          <Typography style={{ fontWeight: 700 }}>{timeString}</Typography>
        </>
      </Stack>
      <Form form={form} onFinish={() => console.log('asd')}>
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: 'این فیلد الزامی است',
            },
          ]}
        >
          <Input size="large" placeholder="عنوان" className="phone-input" />
        </Form.Item>
        <Form.Item
          name="tags"
          rules={[
            {
              required: true,
              message: 'این فیلد الزامی است',
            },
          ]}
        >
          <Select mode="multiple" style={{ width: '100%' }} placeholder="Tags Mode">
            {children}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Video = () => {
  const { id } = useParams();
  const [isModalVisible, setIsModalVisible] = useState();
  const time = useRef();
  const state = {
    video: {
      src: `http://localhost:3001/${id}/master.m3u8`,
      poster: `http://localhost:3001/${id}/thumbnail.png`,
    },
  };

  const onPlayerReady = () => {
    const controlBar = document.querySelector('.vjs-control-bar');
    const tagButton = document.createElement('button');
    tagButton.className = 'vjs-tag-button';
    tagButton.onclick = () => {
      showModal();
      // @ts-ignore
      document.querySelector('.vjs-button.vjs-playing')?.click();
    };
    tagButton.innerHTML = `<img style='width: 20px;margin-top: 2px;margin-left: 1px;' src='${TagIcon}' />`;
    controlBar?.appendChild(tagButton);
  };

  const onVideoTimeUpdate = (t: any) => {
    time.current = t;
  };

  const showModal = () => {
    setIsModalVisible(time.current);
  };

  const handleOk = () => {
    setIsModalVisible(undefined);
  };

  const handleCancel = () => {
    setIsModalVisible(undefined);
  };

  return (
    <div className="videoContainer">
      <VideoPlayer
        onTimeUpdate={onVideoTimeUpdate}
        onReady={() => onPlayerReady()}
        className="videoPlayer"
        controls={true}
        src={state.video.src}
        poster={state.video.poster}
        width="auto"
      />
      <TagModal open={!!isModalVisible} onClose={handleOk} time={isModalVisible} />
    </div>
  );
};

export default Video;

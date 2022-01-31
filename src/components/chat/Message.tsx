import { Col, Row, Form, Button, Avatar } from 'antd';
import React from 'react';
import { Type, Title } from '../common/Title';
import './styles/Message.less';

interface MessageProps {
  guest?: boolean;
  avatarSrc?: string;
  text: string;
}

export const Message = (props: MessageProps): JSX.Element => {
  return (
    <div className="message" style={{ flexDirection: props.guest ? 'row-reverse' : 'row' }}>
      <Avatar src={props.avatarSrc} size={30} />
      <Title type={Type.P} style={{ lineHeight: 2 }}>
        {props.text}
      </Title>
    </div>
  );
};
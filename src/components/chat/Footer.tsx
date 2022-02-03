import { Col, Row, Form, Button, Input } from 'antd';
import React from 'react';
import { SendOutlined } from '@ant-design/icons';
import './styles/Footer.less';

export const Footer = (props: { onSend: () => void; placeholder: string }): JSX.Element => {
  return (
    <Form.Item name="text" className="send-box">
      <Input
        onPressEnter={props.onSend}
        placeholder={props.placeholder}
        suffix={<SendOutlined onClick={props.onSend} />}
      />
    </Form.Item>
  );
};

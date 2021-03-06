import { Button, Col, Row } from 'antd';
import React from 'react';
import { Card } from '../common/Card';
import { ImageBox } from '../common/ImageBox';
import { Title, Type } from '../common/Title';
import imgExam from 'public/images/exam1.png';
import './styles/Task.less';
import ReactMarkdown from 'react-markdown';

interface TaskDescriptionProps {
  style?: React.CSSProperties;
  description: any;
}

export const TaskDescription = (props: TaskDescriptionProps): JSX.Element => {
  return (
    <Card style={{ ...props.style }}>
      <Title type={Type.MEDIUM} style={{ color: '#1890FF' }}>
        توضیح وظیفه
      </Title>
      <div className="task-desc" style={{ whiteSpace: 'pre-line' }}>
        <ReactMarkdown>{props.description}</ReactMarkdown>
      </div>
    </Card>
  );
};

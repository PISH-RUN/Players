import { Col, Progress, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { Title, Type } from './Title';
import './styles/ProgressBar.less';

interface ProgressBarProps {
  text?: string;
  count?: string;
  color?: string;
  percent: number;
  bad?: boolean;
}

export const ProgressBar = (props: ProgressBarProps): JSX.Element => {
  const { text, color, count, bad } = props;
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setPercent(props.percent);
    }, 500);
  }, [props.percent]);

  return (
    <div className={`progress-box ${bad && 'bad-progress'}`}>
      <Row align="middle" gutter={10}>
        <Col>
          <Progress type="circle" format={(percent) => percent} percent={percent} width={65} strokeColor={color} />
        </Col>
        <Col>
          <Title type={Type.THIN}>{count}</Title>
          <Title type={Type.THIN}>{text}</Title>
        </Col>
      </Row>
    </div>
  );
};
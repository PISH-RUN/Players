import { Col, Row } from 'antd';
import React from 'react';
import { Card } from '../common/Card';
import { CardCustomTitle } from '../common/CardCustomTitle';
import { CustomGauge } from '../common/Gauge';
import { Title, Type } from '../common/Title';
import './styles/AverageSpeed.less';

interface AverageSpeedProps {
  rmBackground?: boolean;
  title: string;
  subTitle: string;
  successRate: number;
  speedRate: number;
  time: number;
  passedTime: number;
}

export const AverageSpeed = (props: AverageSpeedProps): JSX.Element => {
  return (
    <Card
      className="average-speed"
      style={props.rmBackground ? { backgroundColor: 'transparent', boxShadow: 'none' } : {}}
      bodyStyle={props.rmBackground ? { padding: 0 } : {}}
    >
      <CardCustomTitle center title={props.title} subTitle={props.subTitle} />
      <Row>
        <Col md={6} className="chart-area-2">
          <Title type={Type.THIN} style={{ minWidth: 71 }}>
            زمان باقی‌مانده
          </Title>
          <CustomGauge percentage={props.time} type="time" height={80} />
        </Col>
        <Col md={12} className="chart-area-1">
          <CustomGauge percentage={props.speedRate} type="speed-rate" height={90} />
        </Col>
        <Col md={6} className="chart-area-2">
          <Title type={Type.THIN}>نرخ موفقیت</Title>
          <CustomGauge percentage={props.successRate} type="success-rate" height={80} />
        </Col>
      </Row>
      <Title type={Type.BOLD}>{props.passedTime}</Title>
      <Title type={Type.THIN}>دقیقه سپری شده</Title>
    </Card>
  );
};

AverageSpeed.defaultProps = {
  successRate: 0,
  speedRate: 0,
  time: 0,
};

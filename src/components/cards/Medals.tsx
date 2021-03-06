import { Col, Row, Skeleton } from 'antd';
import React, { useState } from 'react';
import { Card } from '../common/Card';
import { CardCustomTitle } from '../common/CardCustomTitle';
import { IconWithText } from '../common/IconWithText';
import SunImage from 'public/images/sun.svg';
import P2Image from 'public/images/p2.svg';
import RacketImage from 'public/images/racket.svg';
import { useStatsList } from '../../hooks';

export const Medals = (): JSX.Element => {
  const { data, isLoading } = useStatsList();

  if (isLoading) {
    return (
      <Card>
        <Skeleton paragraph={{ rows: 0 }} />
        <Skeleton paragraph={{ rows: 0 }} />
        <Skeleton paragraph={{ rows: 0 }} />
      </Card>
    );
  }

  const { light, rocket, jet } = data.data?.medals;

  if (light === 1 && rocket === 0 && jet === 0) {
    return <></>;
  }

  return (
    <Card>
      <CardCustomTitle title="مدال‌های شما" />
      <Row gutter={[0, 10]}>
        {data.data?.medals.light > 0 && (
          <Col xs={24}>
            <IconWithText imgSrc={SunImage} text={`${data.data?.medals.light} مدال سریع‌تر از نور`} />
          </Col>
        )}
        {data.data?.medals.rocket > 0 && (
          <Col xs={24}>
            <IconWithText imgSrc={P2Image} text={`${data.data?.medals.rocket} مدال سریع‌تر از موشک`} />
          </Col>
        )}
        {data.data?.medals.jet > 0 && (
          <Col xs={24}>
            <IconWithText imgSrc={RacketImage} text={`${data.data?.medals.jet} مدال سریع‌تر از جت`} />
          </Col>
        )}
      </Row>
    </Card>
  );
};

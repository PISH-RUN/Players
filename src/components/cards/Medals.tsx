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

  return (
    <Card>
      <CardCustomTitle title="مدال‌های شما" />
      <Row gutter={[0, 10]}>
        <Col xs={24}>
          <IconWithText
            imgSrc={SunImage}
            text={`${data.data?.medals.light} مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا`}
          />
        </Col>
        <Col xs={24}>
          <IconWithText
            imgSrc={P2Image}
            text={`${data.data?.medals.rocket} مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا`}
          />
        </Col>
        <Col xs={24}>
          <IconWithText
            imgSrc={RacketImage}
            text={`${data.data?.medals.jet} مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا`}
          />
        </Col>
      </Row>
    </Card>
  );
};

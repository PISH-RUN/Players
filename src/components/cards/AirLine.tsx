import { Button, Col, Row } from 'antd';
import ReactMarkdown from 'react-markdown';
import React, { FC } from 'react';
import { Card } from '../common/Card';
import { ImageBox } from '../common/ImageBox';
import { Title, Type } from '../common/Title';
import './styles/AirLine.less';
import moment from 'jalali-moment';

interface LocationDetailsProps {
  origin?: boolean;
  location: string;
}

interface FlightInformationProps {
  title: string;
  text: string;
}

interface AirLineProps {
  participant: any;
}

const LocationDetails = (props: LocationDetailsProps) => {
  return (
    <div className="location">
      <Title type={Type.BOLD}>{props.location}</Title>
      <Title type={Type.P}>{!props.origin ? 'مبدا ما' : 'مقصد ما'}</Title>
    </div>
  );
};

const FlightInformation = (props: FlightInformationProps) => {
  return (
    <div className="flight-information">
      <Title type={Type.THIN}>{props.title}:</Title>
      <Title type={Type.BOLD}>{props.text}</Title>
    </div>
  );
};

export const AirLine: FC<AirLineProps> = ({ participant }) => {
  const { seat, team, users_permissions_user: me } = participant?.data || {};

  return (
    <Card cardTitle="خط هوایی پیش ران" className="air-line-card">
      <div className="flight-path">
        <LocationDetails location="برهوت" />
        <div className="avatars">
          <ImageBox src="/images/Arrow 1.png" width="70" height="13" />
          <ImageBox src="/images/plane.svg" width="37" height="32" />
          <ImageBox src="/images/Arrow 1.png" width="70" height="13" />
        </div>
        <LocationDetails origin location={team?.event.title} />
      </div>

      <Row className="passenger">
        <Col xs={24} className="name">
          <Title type={Type.THIN}>نام مسافر:</Title>
          <Title type={Type.BOLD}>{`${me?.firstName} ${me?.lastName}`}</Title>
        </Col>
        <Col md={8} xs={24}>
          <FlightInformation title="شماره پرواز" text={team?.event.slug} />
        </Col>
        <Col md={8} xs={24}>
          <FlightInformation title="شماره صندلی" text={seat?.slug} />
        </Col>
        <Col md={8} xs={24}>
          <FlightInformation title="سالن" text={seat?.hall.name} />
        </Col>
        <Col md={8} xs={24}>
          <FlightInformation
            title="تاریخ پرواز"
            text={team?.event.startAt && moment(new Date(team?.event.startAt)).format()}
          />
        </Col>
        <Col md={8} xs={24}>
          <FlightInformation
            title="ساعت پرواز"
            text={team?.event.startAt && moment(new Date(team?.event.startAt)).format('HH:mm')}
          />
        </Col>
        <Col md={8} xs={24}>
          <FlightInformation
            title="ساعت فرود"
            text={team?.event.endAt && moment(new Date(team?.event.endAt)).format('HH:mm')}
          />
        </Col>
        <Col xs={24}>
          <Title type={Type.P} style={{ textAlign: 'justify' }}>
            <ReactMarkdown>{team?.event.description}</ReactMarkdown>
          </Title>
        </Col>
        <Button size="large" type="primary" style={{ width: '100%', borderRadius: 5 }}>
          ورود به هواپیما
        </Button>
      </Row>
    </Card>
  );
};

import { Button, Col, Row } from 'antd'
import React from 'react'
import { Card } from '../common/Card'
import { ImageBox } from '../common/ImageBox'
import { Title, Type } from '../common/Title'
import './styles/AirLine.less'


interface LocationDetailsProps {
    origin?: boolean,
    location: string
}

interface FlightInformationProps {
    title: string,
    text: string
}

const LocationDetails = (props: LocationDetailsProps) => {
    return (
        <div className="location">
            <Title type={Type.BOLD}>{props.location}</Title>
            <Title type={Type.P}>{!props.origin ? "مبدا ما" : "مقصد ما"}</Title>
        </div>
    )
}

const FlightInformation = (props: FlightInformationProps) => {
    return (
        <div className="flight-information">
            <Title type={Type.THIN} >{props.title}:</Title>
            <Title type={Type.BOLD} >{props.text}</Title>
        </div>
    )
}

export const AirLine = (): JSX.Element => {


    return (
        <Card cardTitle="خط هوایی پیش ران" className="air-line-card">
            <div className="flight-path">
                <LocationDetails location="برهوت" />
                <div className="avatars">
                    <ImageBox src="/images/Arrow 1.png" width="70" height="13" />
                    <ImageBox src="/images/plane.svg" width="37" height="32" />
                    <ImageBox src="/images/Arrow 1.png" width="70" height="13" />
                </div>
                <LocationDetails origin location="همدان" />
            </div>

            <Row className="passenger" >
                <Col xs={24} className="name">
                    <Title type={Type.THIN} >نام مسافر:</Title>
                    <Title type={Type.BOLD} >روح الله افضلی</Title>
                </Col>
                <Col md={8} xs={24}><FlightInformation title="شماره پرواز" text="PISHRUN-02" /></Col>
                <Col md={8} xs={24}><FlightInformation title="شماره صندلی" text="78" /></Col>
                <Col md={8} xs={24}><FlightInformation title="سالن" text="هارتک" /></Col>
                <Col md={8} xs={24}><FlightInformation title="تاریخ پرواز" text="۳۰ دی ماه، ۱۴۰۰" /></Col>
                <Col md={8} xs={24}><FlightInformation title="ساعت پرواز" text="۰۷:۴۵" /></Col>
                <Col md={8} xs={24}><FlightInformation title="ساعت فرود" text="۱۸:۱۵" /></Col>
                <Col xs={24}>
                    <Title type={Type.P} style={{textAlign:'justify'}}>یک سامانه نرم افزاری جهت انتخاب الگو، و تاسی گرفتن از روش زندگی ایشان در زندگی خود است. بررسی های انجام شده نسان میدهد، علی رغم اینکه الگو داشتن میتواند روشی موثر و مفید فایده ، علی رغم اینکه الگو داشتن میتواند روشی موثر و مفید فایده </Title>
                </Col>
                <Button size="large" type="primary" style={{width:"100%",borderRadius:5}}>ورود به هواپیما</Button>
            </Row>

        </Card>
    )
}
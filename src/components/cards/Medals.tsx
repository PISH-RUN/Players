import { Col, Row } from 'antd'
import React from 'react'
import { Card } from '../common/Card'
import { CardCustomTitle } from '../common/CardCustomTitle'
import { IconWithText } from '../common/IconWithText'
import SunImage from 'public/images/sun.svg';
import P2Image from 'public/images/p2.svg';
import RacketImage from 'public/images/racket.svg';


export const Medals = (): JSX.Element => {





    return (
        <Card>
            <CardCustomTitle title="مدال‌های شما" />
            <Row gutter={[0,10]}>
                <Col xs={24}><IconWithText imgSrc={SunImage} text="۲ مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا" /></Col>
                <Col xs={24}><IconWithText imgSrc={P2Image} text="۲ مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا" /></Col>
                <Col xs={24}><IconWithText imgSrc={RacketImage} text="۲ مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا" /></Col>
            </Row>
        </Card>
    )
}

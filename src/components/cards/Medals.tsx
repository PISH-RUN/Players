import { Col, Row } from 'antd'
import React from 'react'
import { Card } from '../common/Card'
import { CardCustomTitle } from '../common/CardCustomTitle'
import { IconWithText } from '../common/IconWithText'


export const Medals = (): JSX.Element => {





    return (
        <Card>
            <CardCustomTitle title="مدال‌های شما" />
            <Row gutter={[0,10]}>
                <Col xs={24}><IconWithText imgSrc="/images/sun.svg" text="۲ مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا" /></Col>
                <Col xs={24}><IconWithText imgSrc="/images/p2.svg" text="۲ مدال طلای سریع‌تر از نور به ارزش ۶ کیلو طلا" /></Col>
            </Row>
        </Card>
    )
}
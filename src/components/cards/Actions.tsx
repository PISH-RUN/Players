import { Button, Col, Row } from 'antd';
import React from 'react';
import { Card } from '../common/Card';
import { Title, Type } from '../common/Title';
import './styles/Actions.less';


export const Actions = (): JSX.Element => {





    return (
        <Card>
            <Title type={Type.MEDIUM} style={{ color: "#1890FF" }}>اقدامات</Title>
            <Row gutter={[0, 7]}>
                <Col xs={24}><Button style={{ width: "100%" }} size="large" className="green-btn" >لینک فیلیمو</Button></Col>
                <Col xs={24}><Button style={{ width: "100%" }} size="large" className="orange-btn">لینک افزونه</Button></Col>
            </Row>
        </Card>
    )
}
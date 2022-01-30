import { Col, Row, Space } from 'antd';
import React from 'react';
import { Actions } from '../cards/Actions';
import { Chat } from '../cards/Chat';
import { TaskDescription } from '../cards/TaskDescription';
import { Type, Title } from '../common/Title';
import { TaskStopWatch } from '../task-stopwatch/TaskStopWatch';
import { DashboardWrapper } from './DashboardWrapper';


const UserTask = (): JSX.Element => {
    return (
        <DashboardWrapper>
            <Row style={{ height: "100%" }} justify="space-around">
                <Col md={6} className="col-align-evenly" style={{ paddingTop: 20, paddingRight: 50 }} >
                    <TaskDescription />
                </Col>
                <Col md={11} style={{ textAlign: "center" }} className="col-align-evenly">

                    <Title type={Type.BOLD} style={{ textAlign: "center" }}>عنوان وظیفه : راه اندازی سرور</Title>
                    <TaskStopWatch duration={1} importance="حیاتی" difficultyMultiplier={3} />


                </Col>
                <Col md={6} className="col-align-evenly" style={{ paddingTop: 20, paddingLeft: 50 }}>

                    <Actions />
                    <Chat />

                </Col>
            </Row>
        </DashboardWrapper>
    )
}

export default UserTask;

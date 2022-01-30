import React, { useState, useEffect } from 'react';
import { Col, Row, Space } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
import { Earth } from '../earth/Earth';
import { AllTasks } from '../cards/AllTasks';
import { Status } from '../cards/Status';
import '../../styles/const.less'
import './styles/Dashboard.less'
import { MultiTitle } from '../common/MultiTitle';
import { ProgressBar } from '../common/ProgressBar';
import { PresentTeams } from './dashboard-page/PresentTeams';
import { AirLine } from '../cards/AirLine';
import { AverageSpeed } from '../cards/AverageSpeed';
import { HorizontalWrapper } from '../common/HorizontalWrapper';
import { DashboardWrapper } from './DashboardWrapper';
import { useParticipantsList } from '../../hooks/participants';
import { useTasksList } from '../../hooks/tasks';

const Dashboard = (): JSX.Element => {

    const { data: participants, isLoading } = useParticipantsList();
    const { data: tasks } = useTasksList();

    console.log(participants, tasks);

    const windowSize: Size = useWindowSize()
    const [canvasSize, setCanvasSize] = useState<number>(0)

    useEffect(() => {

        if (windowSize.width && windowSize.height) {
            setCanvasSize((windowSize.width < windowSize.height ? windowSize.width * 0.85 : windowSize.height * 0.85))
        }

    }, [windowSize, canvasSize]);



    return (
        <>

            <Earth status="dashboard"/>
            <DashboardWrapper>
                <Row style={{height:"100%"}}>

                    <Col md={11} className="col-align-evenly" style={{  paddingRight: 40 }}>
                            <MultiTitle title="خلاصه آمار سفر" subTitle="همسفرمان ما" description="چهار صد و یازده مسافر - ۴۱۱" />
                            <HorizontalWrapper>
                                <ProgressBar percent={12} count="۱۵" text="جامانده‌ها" color="#FF9065" />
                                <ProgressBar percent={89} count="۱۴" text="هم تیمی" />
                            </HorizontalWrapper>
                            <PresentTeams />
                            <HorizontalWrapper>
                                <AllTasks title="تعداد کل وظایف" subTitle="وضعیت فعالیت‌های انجام گرفته" />
                                <Status text="نماز ظهر و عصر"/>
                            </HorizontalWrapper>
                        
                    </Col>
                    <Col md={7} xs={24}/>
                    <Col md={6} xs={24} style={{  paddingLeft: 40 }}  className="col-align-evenly">
                            <AirLine />
                            <AverageSpeed passedTime={2541} title="میانگین سرعت حرکت" subTitle="چقدر از برنامه جلو هستیم" />
                    </Col>
                </Row>
            </DashboardWrapper>

        </>
    )
}

export default Dashboard;

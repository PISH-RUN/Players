import React, { useState, useEffect } from 'react';
import { Col, Row, Space, Radio } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
import { Earth } from '../earth/Earth';
import { AllTasks } from '../cards/AllTasks';
import '../../styles/const.less'
import './styles/Dashboard.less'
import { MultiTitle } from '../common/MultiTitle';
import { AverageSpeed } from '../cards/AverageSpeed';
import { DashboardWrapper } from './DashboardWrapper';
import { TeamMembers } from '../cards/TeamMembers';
import { tasksData } from './tasks-data';
import { AdminTaskPin } from '../earth/AdminTaskPin';

export const AdminTasks = (): JSX.Element => {

    const windowSize: Size = useWindowSize()
    const [canvasSize, setCanvasSize] = useState<number>(0)
    const [data, setData] = useState<Array<{ [key: string]: any }>>(tasksData.all)
    const [radioButton, setRadioButton] = useState<string>("all")


    const options = [
        { label: 'همه', value: 'all' },
        { label: 'انجام نشده', value: 'todo' },
        { label: 'در حال انجام', value: 'doing' },
        { label: 'انجام شده', value: 'done' },
    ];

    useEffect(() => {

        if (windowSize.width && windowSize.height) {
            setCanvasSize((windowSize.width < windowSize.height ? windowSize.width * 0.85 : windowSize.height * 0.85))
        }

    }, [windowSize, canvasSize]);

    const taskPins = data.map((task, index) => {
        return <AdminTaskPin text={task.description} key={index} taskID={task.taskID} badgeCount={task.difficulty} type={task.status} />
    })

    return (
        <>
            <Earth pins={taskPins} status="tasks" />
            <DashboardWrapper style={{ width: "30%", right: 0 }}>
                <Row style={{height:"100%"}}>
                    <Col md={22} className="col-align-evenly" style={{ paddingRight: 75 }}>

                        <MultiTitle title="امیر عزیز خوش آمدید" subTitle="مدیریت محترم تیم فنی" description="سالن هاردتک" />
                        <AverageSpeed passedTime={2354} rmBackground title="میانگین سرعت تیم شما" subTitle="چقدر از برنامه جلو هستید" />
                        <AllTasks title="تعداد وظایف تیم شما" subTitle="وضعیت فعالت های انجام گرفته شما" />
                        <TeamMembers /> {/*or Medals (If you are user ) */}
                    </Col>
                </Row>
            </DashboardWrapper>
            
                       
            <div className="custom-radio" style={{ right: "25%" ,bottom: 35}}>
                <Radio.Group
                    size="large"
                    options={options}
                    onChange={(e) => {
                        setRadioButton(e.target.value)
                        setData(tasksData[e.target.value])
                    }}
                    value={radioButton}
                    optionType="button"
                />
            </div>


            {/* </CircleBack> */}

        </>
    )
}

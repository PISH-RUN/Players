import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
import { Earth } from '../earth/Earth';
import { AllTasks } from '../cards/AllTasks';
import '../../styles/const.less';
import './styles/Dashboard.less';
import { MultiTitle } from '../common/MultiTitle';
import { AverageSpeed } from '../cards/AverageSpeed';
import { DashboardWrapper } from './DashboardWrapper';
import { TeamMembers } from '../cards/TeamMembers';
import { tasksData } from './tasks-data';
import { TaskPin } from '../earth/TaskPin';
import { usePin } from 'contexts/pin';
import { set } from 'react-hook-form';

const Tasks = (): JSX.Element => {
  const { setPins } = usePin();
  const windowSize: Size = useWindowSize();
  const [canvasSize, setCanvasSize] = useState<number>(0);

  useEffect(() => {

    if (windowSize.width && windowSize.height) {
      setCanvasSize((windowSize.width < windowSize.height ? windowSize.width * 0.85 : windowSize.height * 0.85));
    }

  }, [windowSize, canvasSize]);


  useEffect(() => {
    const taskPins = tasksData.all.map((task, index) => {
      return <TaskPin key={index} taskID={task.taskID} difficulty={task.difficulty} title={task.title}
                      description={task.description} />;
    });
    setPins(taskPins);
    return () => setPins([]);
  }, []);

  return (
    <>
      {/*<Earth pins={taskPins} status='tasks' />*/}
      <DashboardWrapper style={{ width: '30%', right: 0 }}>
        <Row style={{ height: '100%' }}>
          <Col md={22} className='col-align-evenly' style={{ paddingRight: 75 }}>

            <MultiTitle title='امیر عزیز خوش آمدید' subTitle='مدیریت محترم تیم فنی' description='سالن هاردتک' />
            <AverageSpeed passedTime={2354} rmBackground title='میانگین سرعت تیم شما'
                          subTitle='چقدر از برنامه جلو هستید' />
            <AllTasks title='تعداد وظایف تیم شما' subTitle='وضعیت فعالت های انجام گرفته شما' />
            <TeamMembers /> {/*or Medals (If you are user ) */}
          </Col>
        </Row>
      </DashboardWrapper>

    </>
  );
};

export default Tasks;

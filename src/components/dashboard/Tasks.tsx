import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
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
import { useTasksList } from 'hooks/tasks';
import { useAuth } from 'contexts/auth/auth';
import { Medals } from '../cards/Medals';
import MarkDown from 'react-markdown';
import moment from 'jalali-moment';
import { useStatsList } from '../../hooks';
import { useNavigate } from 'react-router-dom';

const Tasks = (): JSX.Element => {
  const navigate = useNavigate();
  const { setPins } = usePin();
  const { participant, isManager } = useAuth();
  const windowSize: Size = useWindowSize();
  const [canvasSize, setCanvasSize] = useState<number>(0);
  const { data: tasksData1, isLoading } = useTasksList();
  const { data: stats } = useStatsList();

  const { users_permissions_user: me, role, team, seat } = participant || {};

  const tasks =
    tasksData1?.data?.map((t: any) => {
      return { ...t.attributes, id: t.id };
    }) || [];

  const startedTasks = tasks.filter((task: any) => task.status === 'inprogress');

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setCanvasSize(windowSize.width < windowSize.height ? windowSize.width * 0.85 : windowSize.height * 0.85);
    }
  }, [windowSize, canvasSize]);

  useEffect(() => {
    if (tasks?.length === 0) {
      return;
    }

    const taskPins = tasks.map((task: any, index: number) => {
      return <TaskPin key={index} taskID={task.id} difficulty={task.level} title={task.title} />;
    });

    setPins(taskPins);
    return () => setPins([]);
  }, [tasksData1]);

  const userRole = (isManager ? 'مدیریت' : 'عضو') + ' محترم تیم ' + team?.name;

  const startAt = moment(new Date(team?.event?.startAt)).valueOf();
  const endAt = moment(new Date(team?.event?.endAt)).valueOf();
  const now = moment().valueOf();
  const EventDuration = parseInt(
    moment
      .duration(endAt - startAt)
      .asMinutes()
      .toString(),
    10
  );
  const passedTime = parseInt(
    moment
      .duration(now - startAt)
      .asMinutes()
      .toString(),
    10
  );

  if (startedTasks.length > 0) {
    navigate(`/dashboard/tasks/${startedTasks[0].id}`, { replace: true });
    return <></>;
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      {/*<Earth pins={taskPins} status='tasks' />*/}
      <DashboardWrapper style={{ width: '30%', right: 0 }}>
        <Row style={{ height: '100%' }}>
          <Col md={22} className="col-align-evenly" style={{ paddingRight: 75 }}>
            <MultiTitle
              title={`${me?.firstName} عزیز خوش آمدید`}
              subTitle={userRole}
              description={`سالن ${seat?.hall?.name}، صندلی ${seat?.slug}`}
            />
            <AverageSpeed
              passedTime={passedTime}
              speedRate={passedTime / EventDuration}
              time={1 - passedTime / EventDuration}
              rmBackground
              title="میانگین سرعت حرکت شما"
              subTitle="چقدر از برنامه جلو هستید"
            />
            <AllTasks title="تعداد وظایف شما" subTitle="وضعیت فعالیت های انجام گرفته شما" tasks={stats?.data?.tasks} />
            {/*{ isManager ? <TeamMembers /> : <Medals />} /!*or Medals (If you are user ) *!/*/}
            <Medals />
          </Col>
        </Row>
      </DashboardWrapper>
    </>
  );
};

export default Tasks;

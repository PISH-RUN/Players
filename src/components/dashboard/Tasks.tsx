import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Col, Row } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
import { AllTasks } from '../cards/AllTasks';
import '../../styles/const.less';
import './styles/Dashboard.less';
import { MultiTitle } from '../common/MultiTitle';
import { AverageSpeed } from '../cards/AverageSpeed';
import { DashboardWrapper } from './DashboardWrapper';
import { TaskPin } from '../earth/TaskPin';
import { usePin } from 'contexts/pin';
import { useTasksList } from 'hooks/tasks';
import { useAuth } from 'contexts/auth/auth';
import { Medals } from '../cards/Medals';
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

  const getTasks: any = (tasks: any, order = 1) => {
    const levelTasks = _.filter(tasks, { order });
    const levelTodo = _.filter(levelTasks, { status: 'todo' });
    if (levelTodo && levelTodo.length > 0) {
      return levelTodo;
    }

    if (levelTasks && levelTasks.length > 0) {
      return getTasks(tasks, order + 1);
    }

    return [];
  };

  const tasks = tasksData1?.data
    ? getTasks(
        tasksData1?.data?.map((t: any) => {
          return { ...t.attributes, id: t.id };
        })
      )
    : [];

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

  const userRole = (isManager ? '????????????' : '??????') + ' ?????????? ?????? ' + team?.name;

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

  const myTasks = tasksData1?.data?.map((t: any) => {
    return { ...t.attributes, id: t.id };
  });

  const taskStatus = {
    total: myTasks?.length || 0,
    done: myTasks?.filter((t: any) => t.status === 'done').length || 0,
    failed: myTasks?.filter((t: any) => t.status === 'failed').length || 0,
  };

  return (
    <>
      {/*<Earth pins={taskPins} status='tasks' />*/}
      <DashboardWrapper style={{ width: '30%', right: 0 }}>
        <Row style={{ height: '100%' }}>
          <Col md={22} className="col-align-evenly" style={{ paddingRight: 75 }}>
            <MultiTitle
              title={`${me?.firstName} ???????? ?????? ??????????`}
              subTitle={userRole}
              description={`???????? ${seat?.hall?.name}?? ?????????? ${seat?.slug}`}
            />
            <AverageSpeed
              successRate={taskStatus?.done / taskStatus?.total || 1 / 2}
              passedTime={passedTime}
              speedRate={passedTime / EventDuration}
              time={passedTime / EventDuration}
              rmBackground
              title="?????????????? ???????? ???????? ??????"
              subTitle="???????? ???? ???????????? ?????? ??????????"
            />
            <AllTasks
              title="?????????? ?????????? ??????"
              subTitle="?????????? ???????????? ?????? ?????????? ?????????? ??????"
              tasks={taskStatus}
            />
            {/*{ isManager ? <TeamMembers /> : <Medals />} /!*or Medals (If you are user ) *!/*/}
            <Medals />
          </Col>
        </Row>
      </DashboardWrapper>
    </>
  );
};

export default Tasks;

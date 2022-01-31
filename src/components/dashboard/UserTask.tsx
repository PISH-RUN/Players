import { Col, Row, Space } from 'antd';
import React from 'react';
import { Actions } from '../cards/Actions';
import { Chat } from '../cards/Chat';
import { TaskDescription } from '../cards/TaskDescription';
import { Type, Title } from '../common/Title';
import { TaskStopWatch } from '../task-stopwatch/TaskStopWatch';
import { DashboardWrapper } from './DashboardWrapper';
import { useParams } from 'react-router-dom';
import { useTask } from 'hooks/tasks';

type prioritiesType = {
  [key: string]: string
}

const priorities: prioritiesType = {
  'urgent': 'حیاتی',
  'important': 'مهم',
  'normal': 'نرمال',
}

const UserTask = (): JSX.Element => {
  const { taskId } = useParams();

  const { data: taskdata } = useTask(taskId);

  const task = !!taskdata?.data?.attributes ? { ...taskdata?.data?.attributes, id: taskdata?.data?.id } : {};

  if (!taskdata)
    return <></>;

  return (
    <DashboardWrapper>
      <Row style={{ height: '100%' }} justify='space-around'>
        <Col md={6} className='col-align-evenly' style={{ paddingTop: 20, paddingRight: 50 }}>
          <TaskDescription description={task.body} style={{ minHeight: 400 }} />
        </Col>
        <Col md={11} style={{ textAlign: 'center' }} className='col-align-evenly'>

          <Title type={Type.BOLD} style={{ textAlign: 'center' }}>عنوان وظیفه : {task.title}</Title>
          <TaskStopWatch duration={task.estimation}
                         importance={priorities[task.priority] || ''}
                         difficultyMultiplier={task.level}
                         id={task.id}
                         suspended={task.suspended}
                         beganAt={task.beganAt}
                         taskStatus={task.status}
                         finishedAt={task.finishedAt}
          />

        </Col>
        <Col md={6} className='col-align-evenly' style={{ paddingTop: 20, paddingLeft: 50 }}>

          <Actions links={task.link} />
          <Chat />

        </Col>
      </Row>
    </DashboardWrapper>
  );
};

export default UserTask;

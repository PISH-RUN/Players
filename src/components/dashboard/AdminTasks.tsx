import React, { useState, useEffect } from 'react';
import { Col, Row, Space, Radio } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
import { Earth } from '../earth/Earth';
import { AllTasks } from '../cards/AllTasks';
import '../../styles/const.less';
import './styles/Dashboard.less';
import './styles/User.less';
import { MultiTitle } from '../common/MultiTitle';
import { AverageSpeed } from '../cards/AverageSpeed';
import { DashboardWrapper } from './DashboardWrapper';
import { TeamMembers } from '../cards/TeamMembers';
import { tasksData } from './tasks-data';
import { AdminTaskPin } from '../earth/AdminTaskPin';
import { useAuth } from 'contexts/auth/auth';
import { useTeam } from 'hooks/team';
import { usePin } from '../../contexts/pin';

const AdminTasks = (): JSX.Element => {
  const { setPins } = usePin();
  const { participant } = useAuth();
  const { data: team } = useTeam(participant?.team?.id, {
    enabled: !!participant,
  });
  const tasks = team?.data?.attributes.tasks.data.map((t: any) => ({ id: t.id, ...t.attributes }));

  const windowSize: Size = useWindowSize();
  const [canvasSize, setCanvasSize] = useState<number>(0);
  const [data, setData] = useState<Array<{ [key: string]: any }>>(tasksData.all);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const options = [
    { label: 'همه', value: 'all' },
    { label: 'انجام نشده', value: 'todo' },
    { label: 'در حال انجام', value: 'inprogress' },
    { label: 'انجام شده', value: 'done' },
  ];

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setCanvasSize(windowSize.width < windowSize.height ? windowSize.width * 0.85 : windowSize.height * 0.85);
    }
  }, [windowSize, canvasSize]);

  useEffect(() => {
    if (!tasks || tasks?.length === 0) {
      return;
    }

    const taskPins = tasks
      .filter((t: any) => filterStatus === 'all' || t.status === filterStatus)
      .map((task: any, index: number) => {
        let state = '';
        if (!!task.beganAt) {
          const finishTime = task.finishedAt ? new Date(task.finishedAt).getTime() : Date.now();
          const passedTime = finishTime - new Date(task.beganAt).getTime();
          const percent = passedTime / 60 / 1000 / task.estimation;
          if (percent <= 25) {
            state = 'green';
          } else if (percent <= 50) {
            state = 'blue';
          } else if (percent <= 75) {
            state = 'yellow';
          } else if (percent <= 100) {
            state = 'orange';
          } else {
            state = 'red';
          }
        }
        return (
          <AdminTaskPin
            text={task.title}
            key={index}
            taskID={task.id}
            badgeCount={task.level}
            className={`pin-status-${state}`}
            suspended={task.suspended}
          />
        );
      });

    setPins(taskPins);

    return () => setPins([]);
  }, [team, filterStatus]);

  const taskStatus = {
    total: tasks?.length || 0,
    done: tasks?.filter((t: any) => t.status === 'done').length || 0,
    failed: tasks?.filter((t: any) => t.status === 'failed').length || 0,
  };

  return (
    <>
      <DashboardWrapper style={{ width: '30%', right: 0 }}>
        <Row style={{ height: '100%' }}>
          <Col md={22} className="col-align-evenly" style={{ paddingRight: 75 }}>
            <MultiTitle
              title={`${participant.users_permissions_user.firstName} عزیز خوش آمدید`}
              subTitle={`مدیریت محترم تیم ${participant.team.name}`}
              description={`سالن ${participant.seat.hall.name}`}
            />
            <AverageSpeed
              passedTime={2354}
              rmBackground
              title="میانگین سرعت تیم شما"
              subTitle="چقدر از برنامه جلو هستید"
            />
            <AllTasks title="تعداد وظایف تیم شما" subTitle="وضعیت فعالت های انجام گرفته شما" tasks={taskStatus} />
            <TeamMembers />
          </Col>
        </Row>
      </DashboardWrapper>

      <div className="custom-radio" style={{ right: '25%', bottom: 35 }}>
        <Radio.Group
          size="large"
          options={options}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setData(tasksData[e.target.value]);
          }}
          value={filterStatus}
          optionType="button"
        />
      </div>
    </>
  );
};

export default AdminTasks;

import { Button, Col, Dropdown, Menu, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { StopWatch } from './StopWatch';
import { DownOutlined } from '@ant-design/icons';
import './styles/TaskStopWatchWrapper.less';
import { useSuspend, useTask } from 'hooks/tasks';


export interface TaskStopWatchProps {
  difficultyMultiplier: number;
  importance: string;
  duration: number;
  id: number;
  suspended: boolean;
}


export const TaskStopWatch = (props: TaskStopWatchProps): JSX.Element => {
  const { mutate: toggleSuspend, isLoading: isSuspendLoading } = useSuspend({});
  const [percentage, setPercentage] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [timerInterval, setTimerInterval] = useState<any>();
  const [started, setStarted] = useState<boolean>(false);

  // Update stopwatch percentage and check if time is bigger than duration clear interval.
  useEffect(() => {
    setPercentage(Number((time / (props.duration * 60) * 100).toFixed(1)));
    if (time >= (props.duration * 60)) {
      clearInterval(timerInterval);
    }
  }, [time]);

  // Start timer when button is clicked.
  const startTimer = () => {
    setStarted(true);
    if (time < (props.duration * 60)) {
      setTimerInterval(setInterval(() => {
          setTime((state) => state += 1);
        }, 1000),
      );
    }
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={stopTimer} key='1'>پایان ناموفق</Menu.Item>
    </Menu>
  );

  const handleSuspend = () => {
    toggleSuspend({ id: props.id, suspend: !props.suspended });
  };

  return (
    <div className='task-stop-watch-wrapper'>
      <Row justify='center' gutter={[0, 20]}>
        <StopWatch percentage={percentage} difficultyMultiplier={props.difficultyMultiplier}
                   importance={props.importance} />
        <Col xs={24}>
          <Row justify='center' style={{ gap: 10 }} gutter={[10, 0]}>
            {
              started ?
                <Dropdown.Button
                  className='custom-dropdown'
                  type='primary'
                  overlay={menu}
                  onClick={stopTimer}
                  icon={<DownOutlined />}
                >
                  پایان وظیفه
                </Dropdown.Button>
                :
                <Button style={{ width: '180px' }} type='primary' onClick={time > 0 ? stopTimer : startTimer}>
                  آغاز وظیفه
                </Button>
            }
            <Button style={{ width: '180px', marginLeft: 0 }} danger loading={isSuspendLoading} onClick={handleSuspend}>مشکل
              خوردم</Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

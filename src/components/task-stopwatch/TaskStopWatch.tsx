import { Button, Col, Dropdown, Menu, Row, Typography, Alert, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { StopWatch } from './StopWatch';
import { DownOutlined } from '@ant-design/icons';
import './styles/TaskStopWatchWrapper.less';
import { useSuspend, useStartTask, useFailTask, useSuccessTask } from 'hooks/tasks';
import { useQueryClient } from 'react-query';
import moment from 'jalali-moment';
import { log } from 'util';

export interface TaskStopWatchProps {
  difficultyMultiplier: number;
  importance: string;
  duration: number;
  id: number;
  suspended: boolean;
  beganAt: string;
  taskStatus: string;
  finishedAt: string;
}

export const TaskStopWatch = (props: TaskStopWatchProps): JSX.Element => {
  const queryClient = useQueryClient();
  const { mutate: toggleSuspend, isLoading: isSuspendLoading } = useSuspend({
    onSuccess: () => {
      queryClient.invalidateQueries(['task', props.id + '']);
    },
    onError: () => {
      notification.error({
        message: 'وقوع خطا',
        placement: 'bottomLeft',
      });
    },
  });
  const { mutate: startTask, isLoading: isLoadingStartTask } = useStartTask({
    onSuccess: () => {
      queryClient.invalidateQueries(['task', props.id + '']);
    },
    onError: () => {
      notification.error({
        message: 'وقوع خطا',
        placement: 'bottomLeft',
      });
    },
  });
  const { mutate: successTask, isLoading: isSuccessLoading } = useSuccessTask({
    onSuccess: () => {
      queryClient.invalidateQueries(['task', props.id + '']);
    },
    onError: () => {
      notification.error({
        message: 'وقوع خطا',
        placement: 'bottomLeft',
      });
    },
  });
  const { mutate: failTask, isLoading: isFailLoading } = useFailTask({
    onSuccess: () => {
      queryClient.invalidateQueries(['task', props.id + '']);
    },
    onError: () => {
      notification.error({
        message: 'وقوع خطا',
        placement: 'bottomLeft',
      });
    },
  });
  const [percentage, setPercentage] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [timerInterval, setTimerInterval] = useState<any>();
  const [started, setStarted] = useState<boolean>(!!props.beganAt);

  // Update stopwatch percentage and check if time is bigger than duration clear interval.
  useEffect(() => {
    if (props.taskStatus !== 'done' && props.taskStatus !== 'failed') {
      setPercentage(Number(((time / (props.duration * 60)) * 100).toFixed(1)));
    } else {
      clearInterval(timerInterval);
    }
  }, [time, props.taskStatus]);

  // Start timer when button is clicked.
  const startTimer = () => {
    if (time < props.duration * 60) {
      setTimerInterval(
        setInterval(() => {
          setTime((state) => (state += 1));
        }, 1000)
      );
    }
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={() => failTask(props.id)} key="1">
        پایان ناموفق
      </Menu.Item>
    </Menu>
  );

  const handleSuspend = () => {
    toggleSuspend({ id: props.id, suspend: !props.suspended });
  };

  const handleStartTask = () => {
    startTask(props.id);
  };

  useEffect(() => {
    if (started) {
      console.log(props.finishedAt);
      const startAt = moment(new Date(props.beganAt)).valueOf();
      const now = !!props.finishedAt ? moment(new Date(props.finishedAt)).valueOf() : moment().valueOf();
      const passedTime = parseInt(
        moment
          .duration(now - startAt)
          .asSeconds()
          .toString(),
        10
      );
      setTime(passedTime);
      if (!props.finishedAt) startTimer();
    }
    return () => clearInterval(timerInterval);
  }, [started]);

  useEffect(() => {
    if (!!props.beganAt) {
      setStarted(true);
    }
  }, [props.beganAt]);

  return (
    <div className="task-stop-watch-wrapper">
      <Row justify="center" gutter={[0, 20]}>
        <StopWatch
          percentage={percentage}
          difficultyMultiplier={props.difficultyMultiplier}
          importance={props.importance}
        />
        {['todo', 'inprogress'].indexOf(props.taskStatus) > -1 ? (
          <Col xs={24}>
            <Row justify="center" style={{ gap: 10 }} gutter={[10, 0]}>
              {started ? (
                <Dropdown.Button
                  className="custom-dropdown"
                  type="primary"
                  overlay={menu}
                  loading={isSuccessLoading}
                  onClick={() => successTask(props.id)}
                  icon={<DownOutlined />}
                >
                  پایان وظیفه
                </Dropdown.Button>
              ) : (
                <Button
                  style={{ width: '180px' }}
                  type="primary"
                  loading={isLoadingStartTask}
                  onClick={handleStartTask}
                >
                  آغاز وظیفه
                </Button>
              )}
              <Button
                style={{ width: '180px', marginLeft: 0 }}
                type={props.suspended ? 'primary' : 'default'}
                danger
                loading={isSuspendLoading}
                onClick={handleSuspend}
              >
                {props.suspended ? 'مشکل رفع شد' : 'مشکل خوردم'}
              </Button>
            </Row>
          </Col>
        ) : (
          <Col xs={24}>
            {props.taskStatus === 'done' ? (
              <Alert type="success" showIcon message="تسک با موفقیت انجام شده" />
            ) : (
              <Alert type="error" showIcon message="متاسفانه انجام این تسک ناموفق بود" />
            )}
          </Col>
        )}
      </Row>
    </div>
  );
};

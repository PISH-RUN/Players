import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import moment from 'jalali-moment';
// @ts-ignore
import persianJs from 'persianjs';
import { Size, useWindowSize } from '../../hooks/window-size';
import { Earth } from '../earth/Earth';
import { AllTasks } from '../cards/AllTasks';
import { Status } from '../cards/Status';
import '../../styles/const.less';
import './styles/Dashboard.less';
import { MultiTitle } from '../common/MultiTitle';
import { ProgressBar } from '../common/ProgressBar';
import { PresentTeams } from './dashboard-page/PresentTeams';
import { AirLine } from '../cards/AirLine';
import { AverageSpeed } from '../cards/AverageSpeed';
import { HorizontalWrapper } from '../common/HorizontalWrapper';
import { DashboardWrapper } from './DashboardWrapper';
import { useParticipant, useStatsList, useTasksList } from '../../hooks';
import { usePin } from '../../contexts/pin';

const Dashboard = (): JSX.Element => {
  const { setPins } = usePin();
  const { data: participant, isLoading } = useParticipant();
  const { data: tasks } = useTasksList();
  const { data: stats } = useStatsList();

  const windowSize: Size = useWindowSize();
  const [canvasSize, setCanvasSize] = useState<number>(0);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setCanvasSize(windowSize.width < windowSize.height ? windowSize.width * 0.85 : windowSize.height * 0.85);
    }
  }, [windowSize, canvasSize]);

  const startAt = moment(new Date(participant?.data?.team?.event?.startAt)).valueOf();
  const endAt = moment(new Date(participant?.data?.team?.event?.endAt)).valueOf();
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

  const participants = stats?.data?.participants || {};

  return (
    <>
      <DashboardWrapper>
        <Row style={{ height: '100%' }}>
          <Col md={11} className="col-align-evenly" style={{ paddingRight: 40 }}>
            <MultiTitle
              title="خلاصه آمار سفر"
              subTitle="همسفرمان ما"
              description={`${persianJs(participants?.total || '0').digitsToWords()} مسافر - ${participants?.total}`}
            />
            <HorizontalWrapper>
              <ProgressBar
                bad
                percent={
                  !!participants.absent
                    ? parseInt(((participants.absent / participants.total) * 100).toString(), 10)
                    : 0
                }
                count={participants.absent ? participants.absent.toString() : '0'}
                text="جا مانده‌ها"
                color="#FF9065"
              />
              <ProgressBar
                percent={
                  stats?.data?.team.participants.present
                    ? parseInt(
                        (stats?.data?.team.participants.present / stats?.data?.team.participants.total) * 100 + '',
                        10
                      )
                    : 0
                }
                count={stats?.data?.team.participants.total}
                text="هم تیمی"
              />
            </HorizontalWrapper>
            <PresentTeams teams={stats?.data?.teams} />
            <HorizontalWrapper>
              <AllTasks tasks={stats?.data?.tasks} title="تعداد کل وظایف" subTitle="وضعیت فعالیت‌های انجام گرفته" />
              <Status text="نماز ظهر و عصر" />
            </HorizontalWrapper>
          </Col>
          <Col md={7} xs={24} />
          <Col md={6} xs={24} style={{ paddingLeft: 40 }} className="col-align-evenly">
            <AirLine participant={participant} />
            <AverageSpeed
              successRate={25}
              passedTime={passedTime}
              speedRate={passedTime / EventDuration}
              time={1 - passedTime / EventDuration}
              title="میانگین سرعت حرکت"
              subTitle="چقدر از برنامه جلو هستیم"
            />
          </Col>
        </Row>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;

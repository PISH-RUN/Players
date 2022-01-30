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
  const now = moment().valueOf();
  const passedTime = parseInt(
    moment
      .duration(now - startAt)
      .asMinutes()
      .toString(),
    10
  );

  return (
    <>
      <DashboardWrapper>
        <Row style={{ height: '100%' }}>
          <Col md={11} className="col-align-evenly" style={{ paddingRight: 40 }}>
            <MultiTitle
              title="خلاصه آمار سفر"
              subTitle="همسفرمان ما"
              description={`${persianJs(stats?.data?.participants?.total || '0').digitsToWords()} مسافر - ${
                stats?.data?.participants?.total
              }`}
            />
            <HorizontalWrapper>
              <ProgressBar
                bad
                percent={
                  !!stats?.data?.participants.absent
                    ? parseInt(
                        ((stats?.data?.participants.absent / stats?.data?.participants.total) * 100).toString(),
                        10
                      )
                    : 0
                }
                count={stats?.data?.participants.absent ? stats?.data?.participants.absent.toString() : '0'}
                text="جا مانده‌ها"
                color="#FF9065"
              />
              <ProgressBar
                percent={
                  stats?.data?.team.participants.present
                    ? stats?.data?.team.participants.present / stats?.data?.team.participants.total
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

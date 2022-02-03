import React, { useState, useEffect } from 'react';
import { Col, Radio, Row } from 'antd';
import { Size, useWindowSize } from '../../hooks/window-size';
import { MultiTitle } from '../common/MultiTitle';
import { Earth } from '../earth/Earth';
import '../../styles/const.less';
import './styles/User.less';
import { DashboardWrapper } from './DashboardWrapper';
import { usersData } from './users-data';
import { AvatarPin } from '../earth/AvatarPin';
import { usePin } from '../../contexts/pin';
import { useTeamManager, useTeamMembers, useTeams } from 'hooks/team';
import AvatarIcon from 'public/images/avatar-sample.png';
import { useAuth } from '../../contexts/auth/auth';
import { useParticipants } from '../../hooks';
import { UPLOADS_ADDRESS } from '../../api/baseRequest';

const Users = (): JSX.Element => {
  const [attribute, setAttribute] = useState<string>('all');
  const { setPins } = usePin();
  const { data: participants } = useParticipants();

  const windowSize: Size = useWindowSize();
  const [canvasSize, setCanvasSize] = useState<number>(0);
  const [present, setPresent] = useState<string>('all');
  const [data, setData] = useState<Array<{ [key: string]: any }>>(usersData.all);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setCanvasSize(windowSize.width < windowSize.height ? windowSize.width : windowSize.height);
    }
  }, [windowSize, canvasSize]);

  const options =
    participants?.data?.teams?.length > 0
      ? [
          { label: 'همه', value: 'all' },
          ...participants?.data?.teams.map((p: any) => ({
            label: p.name,
            value: p.id,
          })),
        ]
      : [{ label: 'همه', value: 'all' }];
  const options2 = [
    { label: 'همه', value: 'all' },
    { label: 'حاضرین', value: 'present' },
    { label: 'غایبین', value: 'absent' },
  ];

  let allUsers: Array<any> = participants?.participants;

  useEffect(() => {
    if (participants?.data?.teams?.length === 0) return;

    let pins: Array<any> = [];
    if (attribute === 'all') {
      pins = participants?.data?.participants;
    } else {
      pins = participants?.data?.participants.filter((user: any) => user.team === attribute);
    }

    const userPins =
      pins &&
      pins
        .filter((user) => present === 'all' || (present === 'present' ? !!user.enteredAt : !user.enteredAt))
        .map((user, index) => {
          return (
            <AvatarPin
              key={index}
              userID={user.id}
              name={`${user.firstName} ${user.lastName}`}
              avatar={user.avatar ? `${UPLOADS_ADDRESS}${user.avatar}` : AvatarIcon}
              disabled={!user.enteredAt}
            />
          );
        });
    setPins(userPins);
    return () => setPins([]);
  }, [present, attribute, participants?.data?.teams]);

  return (
    <>
      {/*<Earth pins={userPins} status="persons"/>*/}
      <DashboardWrapper style={{ width: '30%', right: 0 }}>
        <Row style={{ height: '100%' }}>
          <Col md={24} style={{ paddingTop: 110, paddingRight: 75 }}>
            <MultiTitle
              title="همراهان پیش‌ران"
              subTitle="کیدنید"
              description={`${participants?.data?.participantsState.present} نفر حاضر از ${participants?.data?.participantsState.total} نفر`}
              style={{ top: 110, right: 37 }}
            />
          </Col>
        </Row>
      </DashboardWrapper>

      <div className="custom-radio">
        <Radio.Group
          size="large"
          options={options}
          onChange={(e) => {
            setAttribute(e.target.value);
            setData(usersData[e.target.value]);
          }}
          value={attribute}
          optionType="button"
        />
        <Radio.Group
          options={options2}
          onChange={(e) => {
            setPresent(e.target.value);
            setData(usersData[e.target.value]);
          }}
          value={present}
          className="radio-btn"
        />
      </div>
    </>
  );
};

export default Users;

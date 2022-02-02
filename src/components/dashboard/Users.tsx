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
import { useTeams } from 'hooks/team';
import AvatarIcon from 'public/images/avatar-sample.png';
import { useAuth } from '../../contexts/auth/auth';

const Users = (): JSX.Element => {
  const { setPins } = usePin();
  const { participant } = useAuth();
  const { data: teamsData } = useTeams(participant?.team?.event?.id, {
    enabled: !!participant?.team?.event?.id,
  });

  const teams = teamsData?.data || [];

  const windowSize: Size = useWindowSize();
  const [canvasSize, setCanvasSize] = useState<number>(0);
  const [attribute, setAttribute] = useState<string>('all');
  const [present, setPresent] = useState<string>('all');
  const [data, setData] = useState<Array<{ [key: string]: any }>>(usersData.all);

  useEffect(() => {
    if (windowSize.width && windowSize.height) {
      setCanvasSize(windowSize.width < windowSize.height ? windowSize.width : windowSize.height);
    }
  }, [windowSize, canvasSize]);

  const options =
    teams?.length > 0
      ? [
          { label: 'همه', value: 'all' },
          ...teams.map((p: any) => ({
            label: p.attributes.name,
            value: p.attributes.name,
          })),
        ]
      : [{ label: 'همه', value: 'all' }];
  const options2 = [
    { label: 'همه', value: 'all' },
    { label: 'حاضرین', value: 'present' },
    { label: 'غایبین', value: 'absent' },
  ];

  let allUsers: Array<any> = [];

  teams
    .filter((team: any) => attribute === 'all' || team.attributes.name === attribute)
    .map((team: any) => {
      allUsers = [...allUsers, ...team.attributes.participants?.data];
      return team;
    });

  useEffect(() => {
    if (teams?.length === 0) return;

    let pins: Array<any> = [];
    teams
      .filter((team: any) => attribute === 'all' || team.attributes.name === attribute)
      .map((team: any) => {
        pins = [...pins, ...team.attributes.participants.data];
        return team;
      });

    const userPins = pins
      .filter(
        (user) =>
          present === 'all' || (present === 'present' ? !!user.attributes.enteredAt : !user.attributes.enteredAt)
      )
      .map((user, index) => {
        return (
          <AvatarPin
            key={index}
            userID={user.id}
            name={user.name}
            avatar={AvatarIcon}
            disabled={!user.attributes.enteredAt}
          />
        );
      });
    setPins(userPins);
    return () => setPins([]);
  }, [present, attribute, teams]);

  return (
    <>
      {/*<Earth pins={userPins} status="persons"/>*/}
      <DashboardWrapper style={{ width: '30%', right: 0 }}>
        <Row style={{ height: '100%' }}>
          <Col md={24} style={{ paddingTop: 110, paddingRight: 75 }}>
            <MultiTitle
              title="همراهان پیش‌ران"
              subTitle="کیدنید"
              description={`${allUsers.filter((u) => !u.attributes?.enteredAt).length} حاضر از ${allUsers?.length}`}
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

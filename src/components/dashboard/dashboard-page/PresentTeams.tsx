import React, { FC } from 'react';
import { TeamProgress } from '../../common/TeamProgress';
import { Title, Type } from '../../common/Title';
import { FileTextOutlined, HddOutlined, GoldOutlined, GiftOutlined, FolderAddOutlined } from '@ant-design/icons';
import './PresentTeams.less';

interface PresentTeamsProps {
  teams: any[];
}

const teamsColor = ['#8675FF', '#FF9065', '#FFC426', '#00B928', '#339AF0'];
const teamsIcon = [FileTextOutlined, HddOutlined, GoldOutlined, GiftOutlined, FolderAddOutlined];

export const PresentTeams: FC<PresentTeamsProps> = ({ teams }) => {
  return (
    <div className="present-teams">
      <Title type={Type.BOLD}>تیم‌های حاضر</Title>
      <div>
        {teams?.map((team, index) => {
          const Icon = teamsIcon[index];
          return (
            <TeamProgress
              key={team.id}
              color={teamsColor[index]}
              count={team.participants}
              percentage={team.tasks.total > 0 ? (team.tasks.done / team.tasks.total).toString() : '0'}
              text={team.name}
              icon={<Icon />}
            />
          );
        })}
      </div>
    </div>
  );
};
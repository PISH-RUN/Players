import { Progress, Tooltip } from 'antd';
import React, { FC } from 'react';
import { Card } from '../common/Card';
import { CardCustomTitle } from '../common/CardCustomTitle';
import { Title, Type } from '../common/Title';
import './styles/AllTasks.less';

interface AllTasksProps {
  title: string;
  subTitle: string;
  tasks?: any;
}

export const AllTasks: FC<AllTasksProps> = (props) => {
  const { title, subTitle, tasks } = props;

  return (
    <Card className="all-tasks">
      <CardCustomTitle title={title} subTitle={subTitle} />
      <Tooltip title={`${tasks?.done || 0} تعداد کامل`}>
        <Progress
          percent={((tasks?.done + tasks?.failed) / tasks?.total) * 100}
          success={{ percent: (tasks?.done / tasks?.total) * 100 }}
        />
      </Tooltip>
      <div className="chart-description">
        <Title type={Type.THIN} className="complementary">
          {tasks?.done || 0} تعداد کامل
        </Title>
        <Title type={Type.THIN} className="secondary">
          {tasks?.failed || 0} تعداد ناقص
        </Title>
      </div>
    </Card>
  );
};

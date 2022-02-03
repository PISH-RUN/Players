import React, { useEffect, useState } from 'react';
import { Title, Type } from './Title';
import './styles/TeamProgress.less';
import { Space } from 'antd';

interface TeamProgressProps {
  text?: string;
  count?: string;
  color?: string;
  percentage?: string;
  icon?: JSX.Element;
}

export const TeamProgress = (props: TeamProgressProps): JSX.Element => {
  const { text, color, count, percentage, icon } = props;

  const [style, setStyle] = useState<React.CSSProperties>({ backgroundColor: color });

  useEffect(() => {
    setStyle({ backgroundColor: color, width: `${percentage}%` });
  }, [percentage]);

  return (
    <div className="team-progress">
      <div className="bar" style={style}>
        <Title type={Type.THIN}>{text}</Title>
        {icon}
      </div>
      <div>
        <Title type={Type.THIN} style={{ fontSize: 14 }}>
          <Space>
            <span>{count}</span>
            <span className="mr-1">مسافر </span>
          </Space>
        </Title>
        <Title type={Type.P} style={{ fontSize: 10, margin: 0 }}>
          <Space>
            <span>{percentage}</span>
            <span className="mr-1 percent-text">درصد پیشرفت</span>
          </Space>
        </Title>
      </div>
    </div>
  );
};

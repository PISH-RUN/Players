import { Table } from 'antd';
import React, { ReactNode, useState } from 'react';
import { Card } from '../common/Card';
import { UsernameInput } from '../common/inputs/UsernameInput';
import { Title, Type } from '../common/Title';
import { ColumnsType } from 'antd/lib/table';
import { useAuth } from '../../contexts/auth/auth';
import { useTeamMembers } from '../../hooks/team';
import './styles/Members.less';

const Status = (props: { className: 'gold-circle' | 'orange-circle' }) => {
  return <span className={'dot ' + props.className}></span>;
};

interface User {
  key: string;
  name: string;
  taskCount: number;
  doneCount: number;
  status?: ReactNode;
  reqCount: number;
}

export const TeamMembers = (): JSX.Element => {
  const { participant } = useAuth();
  const { data: members, isLoading } = useTeamMembers(participant?.team?.id, { enabled: !!participant?.team?.id });
  const [search, setSearch] = useState('');
  const [filteredData, setFiltered] = useState([]);

  const handleSearch = (e: any) => {
    const value = e.target.value || '';
    const data = members?.data.filter((member: any) => {
      return `${member.firstName} ${member.lastName}`.includes(value);
    });

    setSearch(value);
    setFiltered(data);
  };

  const columns: ColumnsType<User> = [
    {
      title: 'نام و نام خانوادگی',
      key: 'name',
      width: '38%',
      render: (member) => `${member?.firstName} ${member?.lastName}`,
    },
    {
      title: 'وضعیت',
      dataIndex: 'taskState',
      key: 'taskState',
      align: 'center',
      render: (state) => {
        if (state === false) {
          return <span className="member-status" />;
        } else if (state <= 25) {
          return <span className="member-status status-green" />;
        } else if (state <= 50) {
          return <span className="member-status status-blue" />;
        } else if (state <= 75) {
          return <span className="member-status status-yellow" />;
        } else if (state <= 100) {
          return <span className="member-status status-orange" />;
        }

        return <span className="member-status status-red" />;
      },
    },
    {
      title: 'تعداد وظایف',
      dataIndex: ['tasks', 'total'],
      key: 'taskCount',
      align: 'center',
    },
    {
      title: 'نرخ موفقیت',
      key: 'doneCount',
      align: 'center',
      render: (member) => {
        if (member.tasks.done > 0 && member.tasks.total) {
          return parseInt(((member.tasks.done / member.tasks.total) * 100).toString(), 10);
        }

        return 0;
      },
    },
    {
      title: 'درخواست',
      dataIndex: 'discussions',
      key: 'discussions',
      align: 'center',
    },
  ];

  return (
    <Card>
      <div className="justify-between" style={{ height: 30 }}>
        <Title type={Type.THIN} style={{ fontSize: 15, marginBottom: 6 }}>
          اعضا تیم شما
        </Title>
        <Title type={Type.P}>{members?.data?.length || 0} نفر</Title>
      </div>
      <UsernameInput size="middle" placeholder="نام" onChange={handleSearch} style={{ marginBottom: 7 }} />
      <Table
        loading={isLoading}
        size="small"
        columns={columns}
        dataSource={search !== '' ? filteredData : members?.data}
        pagination={false}
        scroll={{ x: 200, y: 120 }}
      />
    </Card>
  );
};

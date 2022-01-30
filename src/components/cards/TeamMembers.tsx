import { Button, Col, Row, Table } from 'antd'
import React, { ReactNode } from 'react'
import { Card } from '../common/Card'
import { ImageBox } from '../common/ImageBox'
import { UsernameInput } from '../common/inputs/UsernameInput'
import { Title, Type } from '../common/Title'
import { ColumnsType } from 'antd/lib/table'


const Status = (props: { className: 'gold-circle' | 'orange-circle' }) => {
    return (
        <span className={"dot " + props.className}></span>

    )
}

export const TeamMembers = (): JSX.Element => {

    interface User {
        key: string,
        name: string,
        taskCount: number,
        doneCount: number,
        status?: ReactNode,
        reqCount: number,

    }

    const columns: ColumnsType<User> = [
        {
            title: 'نام و نام خانوادگی',
            dataIndex: 'name',
            key: 'name',
            width: '38%',
        },
        {
            title: 'وضعیت',
            dataIndex: 'status',
            key: 'status',
            align: "center"
        },
        {
            title: 'تعداد وظایف',
            dataIndex: 'taskCount',
            key: 'taskCount',
            align: "center"
        },
        {
            title: 'نرخ موفقیت',
            dataIndex: 'doneCount',
            key: 'doneCount',
            align: "center"
        },
        {
            title: 'درخواست',
            dataIndex: 'reqCount',
            key: 'reqCount',
            align: "center"
        },
    ];

    const data: Array<User> = [
        {
            key: '1',
            name: 'روح الله افضلی',
            taskCount: 10,
            doneCount: 33,
            reqCount: 33,
        },
        {
            key: '2',
            name: 'محمد گزمه',
            status: <Status className="gold-circle" />,
            taskCount: 100,
            doneCount: 0,
            reqCount: 33,
        },
        {
            key: '3',
            name: 'علی احمدی',
            status: <Status className="orange-circle" />,
            taskCount: 10,
            doneCount: 10,
            reqCount: 33,
        },
        {
            key: '4',
            name: 'حسین بوتراب',
            taskCount: 75,
            doneCount: 45,
            reqCount: 33,
        },
    ];

    return (
        <Card>
            <div className="justify-between" style={{ height: 30 }}>
                <Title type={Type.THIN} style={{ fontSize: 15, marginBottom: 6 }}>اعضا تیم شما</Title>
                <Title type={Type.P}>۱۸ نفر</Title>
            </div>
            <UsernameInput size="middle" placeholder="نام" onChange={(e) => console.log(e)} style={{ marginBottom: 7 }} />
            <Table
                size="small"
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: 200, y: 120 }}
            />
        </Card>
    )
}
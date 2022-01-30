import { Progress, Tooltip } from 'antd'
import React from 'react'
import { Card } from '../common/Card'
import { CardCustomTitle } from '../common/CardCustomTitle'
import { Title, Type } from '../common/Title'
import './styles/AllTasks.less'

interface allTasksProps {
    title:string,
    subTitle: string,
}

export const AllTasks = (props:allTasksProps): JSX.Element => {





    return (
        <Card className="all-tasks">
            <CardCustomTitle title={props.title} subTitle={props.subTitle} />
            <Tooltip title="۲۵ کامل">
                <Progress percent={37} success={{ percent: 25 }} />
            </Tooltip>
            <div className="chart-description">
                <Title type={Type.THIN} className="complementary">۲۵ تعداد کامل</Title>
                <Title type={Type.THIN} className="secondary" >۱۲ تعداد ناقص</Title>
            </div>
        </Card>
    )
}
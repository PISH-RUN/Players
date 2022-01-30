import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import './styles/StatusCircle.less';


export interface StatusCircleDataProps {
    percentage: number;
}

export const StatusCircleData = (props: StatusCircleDataProps): JSX.Element => {
    return (
        <div className="status-circle-wrapper">
            <div className="status-circle">
                <ClockCircleOutlined style={{ fontSize: "1.81vh" }} />
                <div style={{ color: "white", fontSize: "1.78vh" }}>زمان پیش‌بینی شده</div>
                <div className="status-percentage">
                    {props.percentage}
                </div>
            </div>
        </div>
    )
}

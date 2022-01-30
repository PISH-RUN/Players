import React from 'react';
import { StatusCircleBorder } from './StatusCircleBorder';
import { StatusCircleData } from './StatusCircleData';
import './styles/StatusCircleWrapper.less';


export interface StatusCircleProps {
    percentage: number
}

export const StatusCircleWrapper = (props: StatusCircleProps): JSX.Element => {
    return (
        <div className="status">
            <StatusCircleBorder />
            <StatusCircleData percentage={props.percentage} />
            
        </div>
    )
}

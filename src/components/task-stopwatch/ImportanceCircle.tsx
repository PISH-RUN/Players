import React from 'react';
import './styles/ImportanceCircle.less'


export interface ImportanceCircleProps {
    importance: string
}

export const ImportanceCircle = (props:ImportanceCircleProps): JSX.Element => {
    return (
        <div className="importance-circle-wrapper">
            <div className="importance-circle-title">
                اهمیت
            </div>
            <div className="importance-circle-data">
                {props.importance}
            </div>
        </div>
    )
}

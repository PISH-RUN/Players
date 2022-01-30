import React from 'react';
import './styles/StatusCircleBorder.less';


export const StatusCircleBorder = (): JSX.Element => {
    return (
        <div className="status-circle-border-wrapper">
            <div className="quarter-circle-top-right"></div>
            <div className="quarter-circle-top-left"></div>
            <div className="quarter-circle-bottom-right"></div>
            <div className="quarter-circle-bottom-left"></div>
            <div className="top-dot"></div>
            <div className="right-dot"></div>
            <div className="left-dot"></div>
            <div className="bottom-dot"></div>
        </div>
    )
}

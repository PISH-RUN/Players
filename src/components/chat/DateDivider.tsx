import React from 'react';
import './styles/DateDivider.less'
import moment from 'jalali-moment';

export const DateDivider = (props: { date: string | any }): JSX.Element => {

    

    return (
        <div className="custom-divider">
            <span></span>
            <span>{moment(props.date).locale("fa").format("LLLL")}</span>
            <span></span>
        </div>
    )
}
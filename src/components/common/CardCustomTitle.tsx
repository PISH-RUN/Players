import React from "react";
import './styles/Card.less'
import { Title, Type } from "./Title";
import './styles/CardCustomTitle.less';


interface CardCustomTitleProps {
    subTitle?: string,
    title : string,
    center?:boolean,
    subTitleStyle?: React.CSSProperties
}

export const CardCustomTitle = (props: CardCustomTitleProps): JSX.Element => {

    const { title,subTitle,center } = props

    return (
        <div className="card-custom-title" style={ { textAlign: center ? "center" : "initial"}}>
            <Title type={Type.THIN}>{title}</Title>
            <Title style={props.subTitleStyle} type={Type.P}>{subTitle}</Title>
        </div>
    )
}
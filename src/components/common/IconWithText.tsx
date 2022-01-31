import React from "react";
import { ImageBox } from "./ImageBox";
import './styles/IconWithText.less'
import { Title, Type } from "./Title";


interface IconWithTextProps {
    imgSrc: any,
    text?: string
}

export const IconWithText = (props: IconWithTextProps): JSX.Element => {

    const { imgSrc, text } = props

    return (
        <div className="IconWithText">
            <ImageBox src={imgSrc} width="20" height="20"/>
            <Title type={Type.THIN}>{text}</Title>
        </div>
    )
}

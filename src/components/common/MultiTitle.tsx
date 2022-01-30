import React,{CSSProperties} from "react";
import { Title, Type } from "./Title";
import './styles/MultiTitle.less'


interface MultiTitleProps {
    title?: string,
    subTitle?: string,
    style?: CSSProperties,
    description?:string
}

export const MultiTitle = (props: MultiTitleProps): JSX.Element => {

    const { subTitle,title,style,description } = props

    return (
        <div className="multiTitle">
            <Title type={Type.THIN} >{title}</Title>
            <Title type={Type.BOLD} >{subTitle}</Title>
            <Title type={Type.BOLD} >{description}</Title>
        </div>
    )
}
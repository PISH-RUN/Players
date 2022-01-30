import { Avatar } from "antd";
import React from "react";
import './styles/ChatCardHeader.less'
import { Title, Type } from "./Title";

interface ChatCardHeaderProps {
    title ?: string ,
    src?:string
}

export const ChatCardHeader = (props: ChatCardHeaderProps): JSX.Element => {

    const { title,src } = props

    return (
        <div className="chat-header">
             <Avatar src={src} size={38}/>
            <Title type={Type.MEDIUM}>{title}</Title>
        </div>
    )
}
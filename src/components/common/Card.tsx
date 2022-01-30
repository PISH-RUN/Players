import React, { CSSProperties } from "react";
import { ChatCardHeader } from "./ChatCardHeader";
import './styles/Card.less'
import { Title, Type } from "./Title";

interface CardProps {
    className?: string,
    children: any,
    cardTitle?: string,
    style?: CSSProperties,
    chatHeader?: boolean,
    avatarSrc?: string,
    bodyStyle?: CSSProperties
}

export const Card = (props: CardProps): JSX.Element => {

    const { className,
        children,
        cardTitle,
        style,
        chatHeader,
        avatarSrc } = props

    return (
        <div className={className ? "card " + className : "card"} style={style} >
            {cardTitle && !chatHeader &&
                <div className="header">
                    <Title type={Type.BOLD}>{cardTitle}</Title>
                </div>
            }
            {chatHeader && <ChatCardHeader title={cardTitle} src={avatarSrc} />}
            <div className="body" style={props.bodyStyle}>{children}</div>

        </div>
    )
}
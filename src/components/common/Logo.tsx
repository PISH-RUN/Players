import React from "react";
import { ImageBox } from "./ImageBox";
import { Title, Type } from "./Title";
import './styles/Logo.less'

export const Logo = (props:{subject?:boolean}): JSX.Element => {

    const {subject} = props

    return (
        <div className="logo-title">
            <ImageBox src="/images/pishrun-logo.png" width="38" height="38" />
            {subject && <Title className="site-name" type={Type.THIN}> پیش‌ران</Title>}
        </div>
    )
}
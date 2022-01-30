import { Progress } from "antd";
import React, { useState, useEffect } from "react";
import { ImageBox } from "./ImageBox";
import { Title, Type } from "./Title";
import './styles/ProgressBar.less'


interface ProgressBarProps {
    text?: string,
    count?: string,
    color?: string,
    percent: number
}

export const ProgressBar = (props: ProgressBarProps): JSX.Element => {

    const { text, color, count } = props
    const [percent, setPercent] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setPercent(props.percent)
        }, 500)
    }, [])

    return (
        <div className="progress-box">
            <Progress type="circle" percent={percent} width={65} strokeColor={color} />
            <div>
                <Title type={Type.THIN}>{count}</Title>
                <Title type={Type.THIN}>{text}</Title>
            </div>
        </div>
    )
}
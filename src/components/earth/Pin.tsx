import { Tooltip, Badge } from 'antd';
import React from 'react';
import { Position } from './pin-position';
import './styles/Pin.less';

export interface PinProps {
    children?: React.ReactNode
    position?: Position
    type?: "todo" | "doing" | "done"
    disabled?: boolean
    tooltip?: string
    badgeCount?: number
    style?: React.CSSProperties
    className?: string
    onClick?:()=> void
}

export const Pin = (props: PinProps): JSX.Element => {
    return(
        <Tooltip placement='left' title={props.tooltip} zIndex={2} mouseEnterDelay={0.3} mouseLeaveDelay={0}>
                <div 
                    style={{
                        ...props.style,
                        right: props.position ? props.position.x : "50%",
                        top: props.position ? props.position.y : "50%"
                    }}
                    onClick={props.onClick}
                    className={`pin ${props.disabled ? "disabled " : ''}${props.type ? props.type : "todo"}`}
                >
                    <Badge count={props.badgeCount} overflowCount={99} style={{ backgroundColor: "#00B928" }}>
                        {props.children}
                    </Badge>

                </div>
        </Tooltip>
    )
}
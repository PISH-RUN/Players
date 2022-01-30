import React, { useEffect, useRef } from 'react';
import { useWindowSize } from '../../hooks/window-size';


export interface ArcProps {
    startAngle: number
    endAngle: number
    size: number
    color?: string
    style?: React.CSSProperties
}

export const Arc = (props: ArcProps): JSX.Element => {

    const canvasRef = useRef<any>()

    const windowSize = useWindowSize()

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const position = props.size / 2

        context.strokeStyle = props.color
        context.lineWidth = 3
        context.beginPath()
        context.arc(position, position, props.size / 2, props.startAngle * (Math.PI / 180), props.endAngle * (Math.PI / 180))
        context.stroke()

    }, [windowSize.height])

    return (
        <canvas style={props.style} ref={canvasRef} width={props.size + 3} height={props.size + 3} />
    )
}

Arc.defaultProps = {
    startAngle: 0,
}

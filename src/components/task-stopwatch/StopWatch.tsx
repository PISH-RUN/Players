import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../../hooks/window-size';
import { Arc } from './Arc';
import { CircularTimer } from './CircularTimer';
import { DifficultyCircle } from './DifficultyCircle';
import { ImportanceCircle } from './ImportanceCircle';
import { SpeedGauge } from './SpeedGauge';
import { StatusCircleWrapper } from './StatusCircle';
import './styles/Stopwatch.less';


export interface StopWatchProps {
    percentage: number
    difficultyMultiplier: number
    importance: string
}

export const StopWatch = (props: StopWatchProps): JSX.Element => {

    const [size, setSize] = useState<number>()

    const windowSize = useWindowSize()

    useEffect(() => {
        if (windowSize.height) {
            setSize(windowSize.height * 0.6)
        }
    }, [windowSize.height])

    return (
        <>
            {
                size &&
                <div className="stopwatch-wrapper">
                <div className="stopwatch">
                    <CircularTimer percentage={props.percentage} />
                    <StatusCircleWrapper percentage={props.percentage} />
                    <DifficultyCircle difficultyMultiplier={props.difficultyMultiplier} />
                    <ImportanceCircle importance={props.importance} />
                    <Arc style={{ position: "absolute", top: "-7%", left: "-7%"}} color="#7F7F92" startAngle={10} endAngle={80} size={size} />
                    <Arc style={{ position: "absolute", top: "-7%", right: "-7%" }} color="#7F7F92" startAngle={100} endAngle={170} size={size} />
                </div>
                <SpeedGauge />
                </div>
            }
        </>
    )
}
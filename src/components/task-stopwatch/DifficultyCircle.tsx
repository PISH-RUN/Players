import React from 'react';
import './styles/DifficultyCircle.less';


export interface DifficultyCircleProps {
    difficultyMultiplier: number;
}

export const DifficultyCircle = (props: DifficultyCircleProps): JSX.Element => {
    return (
        <div className="difficulty-circle-wrapper">
            <div className="difficulty-circle-title">
                ضریب سختی
            </div>
            <div className="difficulty-circle-data">
                {props.difficultyMultiplier}
            </div>
        </div>
    )
}

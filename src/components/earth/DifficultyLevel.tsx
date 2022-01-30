import React from 'react';
import './styles/DifficultyLevel.less';


export interface DifficultyLevelProps {
    difficulty: 1 | 2 | 3 | 4
}

const DifficultyLevelClass = [
    'easy',
    'normal',
    'hard',
    'very-hard'
]

export const DifficultyLevel = (props: DifficultyLevelProps): JSX.Element => {

    const easyColumns = (): Array<React.ReactNode> => {
        let arr = [];
        for (let i = 0; i < 4 - props.difficulty; i++) {
            arr.push(<div className="difficulty-easy" />)
        }
        return arr
    }

    const hardColumns = (): Array<React.ReactNode> => {
        let arr = [];
        for (let i = 0; i < props.difficulty; i++) {
            arr.push(<div className="difficulty-hard" />)
        }
        return arr
    }

    return (
        <div className={`difficulty-wrapper ${DifficultyLevelClass[props.difficulty - 1]}`}>
            {
                hardColumns().map((item) => {
                    return item
                })
            }
            {
                easyColumns().map((item) => {
                    return item
                })
            }
        </div>
    )
}

import React from 'react';
import { CardCustomTitle } from '../common/CardCustomTitle';
import { DifficultyLevel } from './DifficultyLevel';
import { Pin, PinProps } from './Pin';
import { ellipsisText } from '../../functions/ellipsis-text';
import './styles/TaskPin.less';
import { useNavigate } from 'react-router-dom';


export interface TaskPinProps extends PinProps {
    difficulty: 1 | 2 | 3 | 4
    title: string
    description: string
    taskID: number
}

export const TaskPin = (props: TaskPinProps): JSX.Element => {

    const navigate = useNavigate()

    const pinOnClick = () => {
        navigate(`/dashboard/settings/${props.taskID}`)
    }

    return (
        <Pin {...props} style={{padding: 10}} onClick={pinOnClick}>
            <div className="task-pin-wrapper" >
                <CardCustomTitle
                    subTitleStyle={{marginBottom: 0, width: 160, lineHeight: "17px"}}
                    title={ellipsisText(props.title, 20)}
                    subTitle={ellipsisText(props.description, 40)}
                />
                <DifficultyLevel difficulty={props.difficulty} />
            </div>
        </Pin>
    )
}

TaskPin.defaultProps = {
    difficulty: 1
}

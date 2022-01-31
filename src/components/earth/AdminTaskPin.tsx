import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ellipsisText } from '../../functions/ellipsis-text';
import { Pin, PinProps } from './Pin';


interface AdminTaskPinProps extends PinProps {
    text: string
    taskID: number
}

export const AdminTaskPin = (props: AdminTaskPinProps): JSX.Element => {

    const navigate = useNavigate();

    const pinOnClick = () => {
        navigate(`/dashboard/task/${props.taskID}`)
    }

    return (
    
            <Pin {...props} style={{ width: "150px", height: "60px" }} onClick={pinOnClick}>
                {/* <Badge count={props.badgeCount} overflowCount={99} style={{ backgroundColor: "#00B928" }}> */}
                <div className="pin-text-wrapper">
                {ellipsisText(props.text, 20)}
                </div>
                {/* </Badge> */}
            </Pin>
       
    
        
    )
}

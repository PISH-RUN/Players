import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ImageBox } from '../common/ImageBox';
import { Pin, PinProps } from './Pin';


export interface AvatarPinProps extends PinProps {
    avatar: string
    name?: string
    userID: number
}

export const AvatarPin = (props: AvatarPinProps) => {

    const navigate = useNavigate();

    const pinOnClick = () => {
        navigate(`/dashboard/tasks/${props.userID}`)
    }

    return (
        <Pin {...props} tooltip={props.name} onClick={pinOnClick}>
            <ImageBox style={{borderRadius: '10px'}} src={props.avatar} width="50" height="50" />
        </Pin>
    )
}

AvatarPin.defaultProps = {
    avatar: 'https://picsum.photos/70/70'
}

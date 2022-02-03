import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ellipsisText } from '../../functions/ellipsis-text';
import { Pin, PinProps } from './Pin';

interface AdminTaskPinProps extends PinProps {
  text: string;
  taskID: number;
  suspended: boolean;
  icon: any;
}

export const AdminTaskPin = (props: AdminTaskPinProps): JSX.Element => {
  const navigate = useNavigate();

  const pinOnClick = () => {
    navigate(`/dashboard/tasks/${props.taskID}`);
  };

  return (
    <Pin {...props} style={{ width: '150px', height: '60px' }} onClick={pinOnClick}>
      <div className="pin-text-wrapper" style={{ width: 150 }}>
        {props.icon}
        {ellipsisText(props.text, 20)}
      </div>
    </Pin>
  );
};

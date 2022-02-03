import React, { useEffect, useRef } from 'react';
import { Message } from '../chat/Message';
import { DateDivider } from './DateDivider';
import './styles/Conversation.less';
import { UPLOADS_ADDRESS } from '../../api/baseRequest';

export const Conversation = (props: { contact: any; participant: any; data: any }): JSX.Element => {
  let myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // after new message
    return () => {
      if (myRef && myRef.current) {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }, [props]);

  return (
    <div className="conversation">
      {props.data.map((item: any) => {
        const guest = item.participant.id !== props.participant.id;
        const avatar = guest ? props.contact.avatar : props.participant?.users_permissions_user?.avatar;
        return (
          <>
            <Message guest={guest} avatarSrc={`${UPLOADS_ADDRESS}${avatar?.url}`} text={item.body} />
            <DateDivider date={new Date(item.createdAt)} />
          </>
        );
      })}
      <div ref={myRef} />
    </div>
  );
};

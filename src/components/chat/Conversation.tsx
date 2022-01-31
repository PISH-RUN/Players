import React, { useEffect, useRef } from 'react';
import { Message } from '../chat/Message';
import { DateDivider } from './DateDivider';
import './styles/Conversation.less';

export const Conversation = (props: { participant: any; data: any }): JSX.Element => {
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
        return (
          <>
            <Message guest={item.participant.id !== props.participant.id} avatarSrc={item.avatar} text={item.body} />
            <DateDivider date={new Date(item.createdAt)} />
          </>
        );
      })}
      <div ref={myRef} />
    </div>
  );
};

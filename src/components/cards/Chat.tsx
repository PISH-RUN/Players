import React, { useState, useEffect } from 'react';
import { Conversation } from '../chat/Conversation';
import { Footer } from '../chat/Footer';
import { Card } from '../common/Card';
import './styles/Chat.less';
import { Form } from 'antd';
import moment from 'jalali-moment';
import { useChats, useSendMessage } from '../../hooks/chat';
import { useParticipant } from '../../hooks';
import { useTeamManager } from '../../hooks/team';
import { useAuth } from '../../contexts/auth/auth';

type Message = {
  text: string;
  guest: boolean;
  avatar: string;
  date: string;
};

export const Chat = (props: { taskId: any }): JSX.Element => {
  const [form] = Form.useForm();
  const { data, refetch } = useChats(props.taskId);
  const { participant } = useAuth();
  const { mutateAsync: sendMessage } = useSendMessage();
  const { data: manager, isLoading } = useTeamManager(participant?.team?.id, {
    enabled: !!participant,
  });

  const handleSendMessage = async () => {
    let obj = form.getFieldsValue();
    await sendMessage({
      data: {
        participant: participant.id,
        task: props.taskId,
        body: obj.text,
      },
    });
    form.resetFields();
    await refetch();
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <Form form={form}>
      <Card
        chatHeader
        cardTitle={`${manager?.data?.firstName} ${manager?.data?.lastName}`}
        avatarSrc="https://picsum.photos/48/48"
        className="chat-wrapper"
      >
        <Conversation participant={participant} data={data?.data || []} />
        <Footer onSend={handleSendMessage} />
      </Card>
    </Form>
  );
};

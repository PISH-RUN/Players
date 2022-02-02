import React, { useEffect } from 'react';
import { Conversation } from '../chat/Conversation';
import { Footer } from '../chat/Footer';
import { Card } from '../common/Card';
import './styles/Chat.less';
import { Form } from 'antd';
import { useChats, useSendMessage } from '../../hooks/chat';
import { useTeamManager } from '../../hooks/team';
import { useAuth } from '../../contexts/auth/auth';
import { useQueryClient } from 'react-query';

type Message = {
  text: string;
  guest: boolean;
  avatar: string;
  date: string;
};

let chatTimeout: any;

export const Chat = (props: { taskId: any }): JSX.Element => {
  const [form] = Form.useForm();
  const { data, isFetching: chatsLoading, isSuccess, refetch } = useChats(props.taskId);
  const { participant } = useAuth();
  const queryClient = useQueryClient();
  const { mutateAsync: sendMessage } = useSendMessage();
  const { data: manager, isLoading } = useTeamManager(participant?.team?.id, {
    enabled: !!participant?.team?.id,
  });

  const handleSendMessage = async () => {
    let obj = form.getFieldsValue();
    if (!obj.text || obj.text.trim() === '') {
      return;
    }
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

  useEffect(() => {
    if (chatsLoading) {
      return;
    }

    chatTimeout = setTimeout(() => {
      queryClient.invalidateQueries('chats');
    }, 3000);

    return () => {
      clearTimeout(chatTimeout);
    };
  }, [chatsLoading]);

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

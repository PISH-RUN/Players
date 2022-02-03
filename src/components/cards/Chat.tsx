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
import { UPLOADS_ADDRESS } from '../../api/baseRequest';
import { useTaskParticipant } from '../../hooks';

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
  const { data: taskParticipant } = useTaskParticipant(props.taskId);
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

  let user = manager?.data;
  if (participant.role === 'manager') {
    user = taskParticipant?.data;
  }

  return (
    <Form form={form}>
      <Card
        chatHeader
        cardTitle={`${user?.firstName} ${user?.lastName}`}
        avatarSrc={user?.avatar?.url ? `${UPLOADS_ADDRESS}${user?.avatar?.url}` : 'https://picsum.photos/48/48'}
        className="chat-wrapper"
      >
        <Conversation contact={user} participant={participant} data={data?.data || []} />
        <Footer
          placeholder={participant.role === 'manager' ? 'جواب شما به کاربر' : 'سوال شما از مدیر'}
          onSend={handleSendMessage}
        />
      </Card>
    </Form>
  );
};

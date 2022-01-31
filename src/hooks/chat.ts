import { useMutation, useQuery } from 'react-query';
import { api } from '../api';

export const useChats = (taskId: any) => useQuery('chats', () => api.chat.list(taskId), {});

export const useSendMessage = () => useMutation('send-message', (data: any) => api.chat.send(data), {});

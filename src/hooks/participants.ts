import { useMutation, useQuery } from 'react-query';
import { api } from '../api';

export const useParticipant = () => useQuery('participants', () => api.participant.list(), {});

export const useUpdateParticipant = (options: any) =>
  useMutation('update-participant', (data: any) => api.participant.update(data), options);

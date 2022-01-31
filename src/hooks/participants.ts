import { useMutation, useQuery } from 'react-query';
import { api } from '../api';

export const useParticipant = () => useQuery('participants', () => api.participant.list(), {});

export const useUpdateParticipant = () =>
  useMutation('update-participant', (data: any) => api.participant.update(data), {});

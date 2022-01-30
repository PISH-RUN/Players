import { useQuery } from 'react-query';
import { api } from '../api';

export const useParticipant = () => useQuery('participants', () => api.participant.list(), {});

import { useQuery } from 'react-query';
import { api } from '../api';

export const useParticipantsList = () => useQuery('participants', () => api.participant.list(), {})


import { useQuery } from 'react-query';
import { api } from '../api';

export const useTeams = () => useQuery('teams', () => api.team.list(), {});

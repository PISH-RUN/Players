import { useQuery } from 'react-query';
import { api } from '../api';

export const useTeams = () => useQuery('teams', () => api.team.list(), {});

export const useTeam = (id: any, options: any) => useQuery(['team', id], () => api.team.get(id), options);

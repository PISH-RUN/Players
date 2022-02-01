import { useQuery } from 'react-query';
import { api } from '../api';

export const useTeams = () => useQuery('teams', () => api.team.list(), {});

export const useTeam = (id: any, options: any) => useQuery(['team', id], () => api.team.get(id), options);

export const useTeamManager = (id: any, options: any) =>
  useQuery(['team', id, 'manager'], () => api.team.getManager(id), options);

export const useTeamMembers = (id: any, options: any) =>
  useQuery(['team', id, 'members'], () => api.team.getMembers(id), options);

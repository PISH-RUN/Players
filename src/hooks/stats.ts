import { useQuery } from 'react-query';
import { api } from '../api';

export const useStatsList = () => useQuery('stats', () => api.stats.list(), {});

import { useQuery } from 'react-query';
import { api } from '../api';

export const useTasksList = () => useQuery('tasks', () => api.tasks.list(), {})


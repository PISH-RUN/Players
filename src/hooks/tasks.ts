import { useMutation, useQuery } from 'react-query';
import { api } from '../api';
import { LoginProps } from './auth';

export const useTasksList = () => useQuery('tasks', () => api.tasks.list(), {});

export const useTask = (taskId: any) => useQuery(['task', taskId], () => api.tasks.get(taskId), {});

export const useStartTask = (options: any) => useMutation((id: any) => api.tasks.start(id), options);

export const useSuspend = (options: any) =>
  useMutation(
    ({ id, suspend = true }: { id: number; suspend?: boolean }) =>
      suspend ? api.tasks.suspend(id) : api.tasks.unsuspend(id),
    options
  );

export const useSuccessTask = (options: any) => useMutation((id: any) => api.tasks.success(id), options);

export const useFailTask = (options: any) => useMutation((id: any) => api.tasks.fail(id), options);

export const useTaskParticipant = (id: any) => useQuery('taskParticipant', () => api.tasks.taskParticipant(id), {});
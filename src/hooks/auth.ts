import { useMutation } from 'react-query';
import { api } from '../api';

export const useOPT = (options: any) => useMutation((phone: string) => api.auth.opt({ mobile: phone }), options)

export type LoginProps = {
    mobile: string,
    token: string
}

export const useLogin = (options: any) => useMutation((data: LoginProps) => api.auth.login(data), options)
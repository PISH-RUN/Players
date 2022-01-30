import {baseRequest} from './baseRequest';
import { Method } from 'axios';

export const api = {
    auth: {
        opt: (data: any) => baseRequest('/auth/otp', {data, method: 'post'}),
        login: (data: any) => baseRequest('/auth/login', {data, method: 'post'})
    },
    participant: {
        list: () => baseRequest('/participant', {method: 'get', needAuthenticated: true}),
    },
    tasks: {
        list: () => baseRequest('/tasks', {method: 'get', needAuthenticated: true}),
    }
}
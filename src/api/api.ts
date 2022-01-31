import {baseRequest} from './baseRequest';
import qs from 'query-string';
import { Method } from 'axios';

export const api = {
    auth: {
        opt: (data: any) => baseRequest('/auth/otp', {data, method: 'post'}),
        login: (data: any) => baseRequest('/auth/login', {data, method: 'post'})
    },
    participant: {
        list: () => baseRequest('/participant', {method: 'get', needAuthenticated: true}),
        update: (data: any) => baseRequest('/users/me', {data, method: 'put', needAuthenticated: true}),
    },
    tasks: {
        list: () => baseRequest('/tasks', {method: 'get', needAuthenticated: true}),
        get: (taskId:any) => baseRequest(`/tasks/${taskId}`, {method: 'get', needAuthenticated: true}),
        start: (id: any) => baseRequest(`/tasks/${id}/start`, { method: 'get', needAuthenticated: true}),
        finish: (id: any) => baseRequest(`/tasks/${id}/finish`, { method: 'get', needAuthenticated: true}),
        suspend: (id: any) => baseRequest(`/tasks/${id}/suspend`, { method: 'get', needAuthenticated: true})
    },
    stats: {
        list: () => baseRequest('/stats', {method: 'get', needAuthenticated: true}),
    },
    team: {
        list: () => baseRequest('/teams?populate[participants]=*&pagination[page]=1&pagination[pageSize]=400', {method: 'get', needAuthenticated: true}),
        get: (id: any) => baseRequest(`/teams/${id}?populate[tasks]=*&populate[participants]=*&pagination[page]=1&pagination[pageSize]=400`, {method: 'get', needAuthenticated: true}),
    }
}

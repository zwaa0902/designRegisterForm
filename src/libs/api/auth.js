import Router from 'next/router';

import { LOGIN_ROUTE } from '@/constants/routes';
import {
    addAuthorizationHeader,
    removeAuthorizationHeader,
    request,
} from '@/libs/request';

const AuthAPI = {
    login: async (identifier, password) => {
        removeAuthorizationHeader();
        const { jwt } = await request({
            url: '/auth/local',
            method: 'POST',
            data: { identifier, password },
            withCredentials: true,
        });
        addAuthorizationHeader(jwt);
    },
    refreshToken: async () => {
        removeAuthorizationHeader();
        const { jwt } = await request({
            url: '/auth/refresh-token',
            method: 'POST',
            withCredentials: true,
        });
        addAuthorizationHeader(jwt);
    },
    logout: async () => {
        removeAuthorizationHeader();
        await request({
            url: '/auth/logout',
            method: 'POST',
            withCredentials: true,
        });
        Router.push(LOGIN_ROUTE);
    },
};

export default AuthAPI;

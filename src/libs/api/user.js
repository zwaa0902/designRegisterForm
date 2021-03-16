import { request } from '@/libs/request';

const UserAPI = {
    me: () => request({ url: '/users/me' }),
};

export default UserAPI;

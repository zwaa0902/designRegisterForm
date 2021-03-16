/* eslint-disable no-shadow, no-lonely-if */

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

/**
 * Add the Authorization Header, which is typically used to send access tokens to a server.
 */
export const addAuthorizationHeader = (jwt) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};

/**
 * Remove the Authorization Header.
 */
export const removeAuthorizationHeader = () => {
    delete axiosInstance.defaults.headers.common.Authorization;
};

/**
 * Request Wrapper with default success/error actions.
 */
export const request = (options) => {
    const onSuccess = (response) => {
        if (process.env.NODE_ENV !== 'production')
            console.debug('Request Successful', response);
        return response.data;
    };

    const onError = function (error) {
        const { config, response, request, message } = error;
        if (process.env.NODE_ENV !== 'production')
            console.group('Request Failed');
        if (process.env.NODE_ENV !== 'production')
            console.error('Config: ', config);
        if (response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx.
            const { data, status, headers } = response;
            if (process.env.NODE_ENV !== 'production')
                console.error('Data: ', data);
            if (process.env.NODE_ENV !== 'production')
                console.error('Status: ', status);
            if (process.env.NODE_ENV !== 'production')
                console.error('Headers: ', headers);
        } else if (request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js.
            if (process.env.NODE_ENV !== 'production') console.error(request);
        } else {
            // Something happened in setting up the request that triggered an Error.
            if (process.env.NODE_ENV !== 'production')
                console.error('Error Message: ', message);
        }
        if (process.env.NODE_ENV !== 'production') console.groupEnd();
        return Promise.reject(response || message);
    };

    return axiosInstance(options).then(onSuccess).catch(onError);
};

// For multiple requests.
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, jwt = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(jwt);
        }
    });

    failedQueue = [];
};

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            originalRequest.url !== '/auth/refresh-token'
        ) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then((jwt) => {
                        originalRequest.headers.Authorization = `Bearer ${jwt}`;
                        return request(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            isRefreshing = true;

            return new Promise(function (resolve, reject) {
                removeAuthorizationHeader();
                request({
                    method: 'POST',
                    url: '/auth/refresh-token',
                    withCredentials: true,
                })
                    .then(({ jwt }) => {
                        addAuthorizationHeader(jwt);
                        originalRequest.headers.Authorization = `Bearer ${jwt}`;
                        processQueue(null, jwt);
                        resolve(request(originalRequest));
                    })
                    .catch((err) => {
                        processQueue(err, null);
                        reject(err);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;

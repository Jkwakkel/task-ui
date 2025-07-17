import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.baseURL = 'http://127.0.0.1:8002/api';

window.axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }
);

window.axios.interceptors.response.use(
    (response) => { return response; },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                const token = localStorage.getItem('token');
                if (token) {
                    localStorage.removeItem('token');
                    error.customMessage = 'Your session has expired. Please login again.';
                } else {
                    error.customMessage = 'Login has failed, please try again.';
                }
            } else if (error.response.status === 403) {
                error.customMessage = 'You do not have permission to perform this action.';
            } else if (error.response.status === 422) {
                error.customMessage = error.response.data.message;
            } else if (error.response.status === 500) {
                error.customMessage = 'An error has occurred. Please try again.';
            }
        } else {
            error.customMessage = 'Could not connect to the server. Please try again.';
        }

        return Promise.reject(error);
    }
);

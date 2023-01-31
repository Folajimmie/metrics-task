let axiosConfig = require('axios');

axiosConfig.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axiosConfig.defaults.headers.get['Content-Type'] = 'application/json';

export const setAuthToken = (token) => {
  localStorage.setItem('token', 'Bearer ' + token);
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getAuthToken = () => {
    let AUTH_TOKEN = localStorage.getItem('token');
    return AUTH_TOKEN;
  };
  
  export const getUser = () => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user'));
      return user;
    }
  };

  export const clearToken = () => {
    localStorage.removeItem('token');
  };
  ``
  export const clearUser = () => {
    localStorage.removeItem('user');
  };

  export const axios = axiosConfig;
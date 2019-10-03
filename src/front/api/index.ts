import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? '//localhost:3000/api/v1'
    : 'api/v1',
});

export default apiInstance;

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://elegant-duck-3bccb7b995.strapiapp.com/api',
});

export default api;
import axios from 'axios';

const apiUrl = 'https://api.reusableform.diy/api';

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

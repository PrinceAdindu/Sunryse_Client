import axios from 'axios';
import config from '../config/config';

export default axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: ` ${config.apiUrl}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

import axios from 'axios';
import { CONFIG } from '@config';

const instance = axios.create({
  baseURL: CONFIG.BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${CONFIG.ACCESS_TOKEN}`;
  return config;
});

export default instance;

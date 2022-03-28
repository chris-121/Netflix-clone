import axios from 'axios';
import { apiBaseUrl } from './constants/contansts';
const instance = axios.create({
    baseURL: apiBaseUrl,
  });

export default instance;
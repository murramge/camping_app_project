import axios from 'axios';
import {getStorage} from './storages';

const SWAGGER_URL = 'http://13.209.27.220:8080';
const GOCAMP_URL = 'http://apis.data.go.kr/B551011/GoCamping';

const axiosApi = (uri, options) => {
  const instance = axios.create({baseURL: uri, ...options});
  return instance;
};

const axiosAuthApi = (uri, options) => {
  const token = getStorage('cookie');
  const instance = axios.create({
    baseURL: uri,
    headers: {Authorization: token},
    ...options,
  });
  return instance;
};

export const swaggerInstance = axiosApi(SWAGGER_URL);
export const gocampInstance = axiosApi(GOCAMP_URL);
export const authInstance = axiosAuthApi(SWAGGER_URL);

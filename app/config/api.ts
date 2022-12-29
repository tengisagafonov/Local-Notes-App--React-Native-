import axios from 'axios';
// @ts-ignore
import {REACT_APP_URL} from '@env';

export const API_URL = REACT_APP_URL;

export default axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

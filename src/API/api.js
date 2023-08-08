import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json' },
});

const postUserData = (data, url, method = 'post') => {
  return instance({
    method,
    url,
    data,
  });
};

export { postUserData };

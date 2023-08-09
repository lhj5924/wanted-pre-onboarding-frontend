import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json' },
});
const todoInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('AccessToken')}`,
  },
});

const postUserData = (data, url, method = 'post') => {
  return instance({
    method,
    url,
    data,
  });
};
const postTodo = (data, url, method = 'post') => {
  const accessToken = localStorage.getItem('AccessToken');
  return todoInstance({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const getTodo = (url, method = 'get') => {
  const accessToken = localStorage.getItem('AccessToken');
  return instance({
    method,
    url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const updateTodo = (data, url, method = 'put') => {
  const accessToken = localStorage.getItem('AccessToken');
  return instance({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
const deleteTodo = (url, method = 'delete') => {
  const accessToken = localStorage.getItem('AccessToken');
  return instance({
    method,
    url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { postUserData, postTodo, getTodo, updateTodo, deleteTodo };

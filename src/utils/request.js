import { message } from 'antd';
import axios from 'axios';
const api = axios.create({
  // baseURL: 'http://localohost:9527/'
});

api.interceptors.request.use(
  config => {
    config.headers.Authorization = localStorage.getItem('token');
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      message.error(response.data.message)
      return Promise.reject(response.data.message);
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * GET请求
 * @param {Object} { url, param }; param为可选参数
 * @returns Promise
 */
function getApi({ url, param }) {
  const setting = { url, method: 'GET' };
  if (param) {
    setting.param = param;
  }
  return api(setting);
}

/**
 * POST请求
 * @param {Object} { url, param, data }; param, data为可选参数
 * @returns Promise
 */
function postApi({ url, param, data }) {
  const setting = { url, method: 'POST' };
  if (param) {
    setting.param = param;
  }
  if (data) {
    setting.data = data;
  }
  return api(setting);
}
/**
 * PUT请求
 * @param {Object} { url, param, data }; param, data为可选参数
 * @returns Promise
 */
function putApi({ url, param, data }) {
  const setting = { url, method: 'PUT' };
  if (param) {
    setting.param = param;
  }
  if (data) {
    setting.data = data;
  }
  return api(setting);
}
/**
 * DELETE请求
 * @param {Object} { url, param, data }; param, data为可选参数
 * @returns Promise
 */
function deleteApi({ url, param, data }) {
  const setting = { url, method: 'DELETE' };
  if (param) {
    setting.param = param;
  }
  if (data) {
    setting.data = data;
  }
  return api(setting);
}

export { getApi, postApi, putApi, deleteApi };

export default api;

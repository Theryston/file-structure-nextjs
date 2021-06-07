import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';
export const BASE_URL = 'http://localhost:3000';
// let urls = {
//   test: `http://localhost:3334`,
//   development: 'http://localhost:3333/',
//   production: 'https://your-production-url.com/',
// };
//   baseURL: urls[process.env.NODE_ENV],
let _accessToken = null;
let BaseHttpService = {};
BaseHttpService.get = async (endpoint, options = {}) => {
  Object.assign(options, BaseHttpService._getCommonOptions());
  return axios
    .get(`${BASE_URL}/${endpoint}`, options)
    .catch((error) => BaseHttpService._handleHttpError(error));
};

BaseHttpService.post = async (endpoint, data = {}, options = {}) => {
  Object.assign(options, BaseHttpService._getCommonOptions());
  return axios
    .post(`${BASE_URL}/${endpoint}`, data, options)
    .catch((error) => BaseHttpService._handleHttpError(error));
};

BaseHttpService.delete = async (endpoint, options = {}) => {
  Object.assign(options, BaseHttpService._getCommonOptions());
  return axios
    .delete(`${BASE_URL}/${endpoint}`, options)
    .catch((error) => BaseHttpService._handleHttpError(error));
};

BaseHttpService.patch = async (endpoint, data = {}, options = {}) => {
  Object.assign(options, BaseHttpService._getCommonOptions());
  return axios
    .patch(`${BASE_URL}/${endpoint}`, data, options)
    .catch((error) => BaseHttpService._handleHttpError(error));
};

BaseHttpService._handleHttpError = (error) => {
  const { statusCode } = error.response.data;

  if (statusCode !== 401) {
    throw error;
  } else {
    return BaseHttpService._handle401();
  }
};

BaseHttpService._handle401 = () => {
  Router.push('/auth/sign-in');
};

BaseHttpService._getCommonOptions = () => {
  const token = BaseHttpService.loadToken();

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

BaseHttpService.getAccessToken = () => {
  return _accessToken ? _accessToken : BaseHttpService.loadToken();
};

BaseHttpService.saveToken = (accessToken) => {
  _accessToken = accessToken;
  console.log(_accessToken);
  return Cookies.set('token', accessToken, { expires: 7 });
};

BaseHttpService.loadToken = () => {
  const token = Cookies.get('token');
  _accessToken = token;
  return token;
};

BaseHttpService.removeToken = () => {
  Cookies.remove('token');
};

export default BaseHttpService;

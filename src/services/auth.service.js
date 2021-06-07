import { post } from 'axios';
import BaseHttpService from './base-http.service';
import { BASE_URL } from './base-http.service';
import Router from 'next/router';
const signIn = async (email, password) => {
  const { data: token } = await BaseHttpService.post('auth/signin', {
    email,
    password,
  });
  if (token) {
    const accessToken = token.accessToken;
    BaseHttpService.saveToken(accessToken);
    const { data: user } = await BaseHttpService.get('api/users');
    console.log('Got user', user);
    Router.push('/');
    return user;
  }
};

const signUp = async (name, email, password) => {
  const req = await post(`${BASE_URL}/auth/signup`, { name, email, password });
  return req;
};

const signOut = async () => {
  BaseHttpService.removeToken();
};
export default { signIn, signUp, signOut };

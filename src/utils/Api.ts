import axios, {AxiosRequestConfig} from 'axios';
import {IUserInfo} from './Interfaces';

const URI = '';
const STATIC_URI = '';

interface Response<T> {
  code: number;
  payload: T;
  message?: string;
}

export class Api {
  static async invoke<T>(
    endpoint: string,
    params?: any,
    method: 'post' | 'get' = 'get',
    options?: AxiosRequestConfig,
  ) {
    try {
      options = options || {};
      options.params = params;
      let url = URI + endpoint;
      let response;
      if (__DEV__) {
        console.log(url, params, options);
      }
      if (method === 'get') {
        response = await axios.get<Response<T>>(url, options);
      } else {
        response = await axios.post<Response<T>>(url, params, options);
      }

      let responseJsonData = await response.data;
      if (__DEV__) {
        console.log(responseJsonData);
      }
      return responseJsonData;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  static getImageUri = (img: string) => {
    return STATIC_URI + img;
  };

  static login = async (email: string, password: string) => {
    const res = await Api.invoke<{token: string}>(
      'auth/login',
      {email, password, remember: true},
      'post',
    );
    if (res?.code === 200) {
      Api.setAuthorizationHeader(res.payload.token);
    }

    return res;
  };

  static logout = async () => {
    await Api.invoke<{token: string}>('auth/logout', {}, 'post');
    Api.setAuthorizationHeader();
  };

  static setAuthorizationHeader = (token?: string) => {
    if (!token) {
      if (axios.defaults.headers.common.Authorization) {
        delete axios.defaults.headers.common.Authorization;
      }
    } else {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  };

  static getUserInfo = async () => {
    const res = await Api.invoke<{user: IUserInfo}>('users/show');
    if (res?.code === 200) {
      return res.payload;
    }
  };
}

import axios, {AxiosRequestConfig} from 'axios';
import {IUserInfo, ICategory} from './Interfaces';

const URI = 'https://app.buymeua.com/index.php?route=';
const STATIC_URI = '';
const TOKEN =
  '31b5MAVbxTGSkNC5xXvQD8XlXfLV1vziJ6eWXoR6MYQneVFPMghJncsv2aje2FylMrw0n7UesN8NS5odcImVDJ2THUCuGnxrITjuCoxhqT4tRYW8uOmgotqCeLhp1Ue8ciEhALjNlcmRxrkAYXdAvuN1wfQ3eAfgBxWmOejh3h3ruoEW3JMn2zXzMlU725T6eMVbCmOsWCSC5ZeWacqU5SO0tJWjFGjLo3Vq7Xo7q2Ti56G3JsrrKdXXEvWaUhtH';

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
      let url = URI + endpoint + '&token=' + TOKEN;
      let response;
      if (__DEV__) {
        console.log(url, params, options);
      }
      if (method === 'get') {
        response = await axios.get<T>(url, options);
      } else {
        response = await axios.post<T>(url, params, options);
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

  static getLatestsProducts = async (limit = 20, page = 1) => {
    return [];
  };

  static getActionsProducts = async (limit = 20, page = 1) => {
    return [];
  };

  static getCatogories = async () => {
    const res = await Api.invoke<ICategory[]>('api/category/categories');
    if (res && res.length) {
      return res[0].children;
    }
    return [];
  };
}

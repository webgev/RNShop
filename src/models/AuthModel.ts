import {observable, action} from 'mobx';
import {Api} from 'utils/Api';
import AsyncStorage from '@react-native-community/async-storage';
import {EventRegister} from 'utils/Events';
import {IUserInfo} from 'utils/Interfaces';

const STORAGE_AUTH_TOKEN = 'song@auhtToken';

class AuthModel {
  @observable
  isAuth = false;
  @observable
  session = '';
  @observable
  userInfo: IUserInfo | undefined;

  @action
  login = async (email: string, password: string) => {
    const res = await Api.login(email, password);
    if (res?.code === 200) {
      this.isAuth = true;
      AsyncStorage.setItem(STORAGE_AUTH_TOKEN, res.payload.token);
      EventRegister.emit('auth', true);
    } else {
      throw res.message;
    }

    return res?.code === 200;
  };

  @action
  logout = async () => {
    await Api.logout();
    this.isAuth = false;
    AsyncStorage.removeItem(STORAGE_AUTH_TOKEN);
    EventRegister.emit('auth', false);
  };

  @action
  init = async () => {
    const token = await AsyncStorage.getItem(STORAGE_AUTH_TOKEN);
    if (token) {
      Api.setAuthorizationHeader(token);
      const user = await Api.getUserInfo();
      if (user) {
        this.userInfo = user?.user;
        this.isAuth = true;
      } else {
        AsyncStorage.removeItem(STORAGE_AUTH_TOKEN);
      }
    }
  };
}
export default new AuthModel();

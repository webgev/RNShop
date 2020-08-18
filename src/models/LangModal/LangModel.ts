import {NativeModules, Platform} from 'react-native';
import {observable, action} from 'mobx';
import en from './en';

interface UserInfo {
  email: string;
  group: number;
  id: string;
}

class LangModel {
  @observable
  lang = 'ru';

  constructor() {
    const deviceLanguage: string =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;

    if (deviceLanguage.indexOf('en') > -1) {
      this.lang = 'en';
    }
  }

  @action
  changeLang(lang: string) {
    this.lang = lang;
  }

  rk(text: string) {
    if (this.lang === 'ru') {
      return text;
    }
    if (!en[text] && __DEV__) {
      console.warn(text);
    }
    return en[text] || text;
  }
}
export default new LangModel();

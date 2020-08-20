import {observable, action} from 'mobx';
import {Api} from 'utils/Api';
import AsyncStorage from '@react-native-community/async-storage';
import {ICategory} from 'utils/Interfaces';

const STORAGE = '@Category';

class CategoryModel {
  @observable
  categories: ICategory[] = [];

  private isLoad = false;

  constructor() {
    this.init();
  }

  private async init() {
    const res = await AsyncStorage.getItem(STORAGE);
    if (res) {
      this.categories = JSON.parse(res);
    }
  }

  @action
  async getCategories() {
    if (this.isLoad) {
      return this.categories;
    }
    this.isLoad = true;
    const categories = await Api.getCatogories();
    this.categories = categories;
    await AsyncStorage.setItem(STORAGE, JSON.stringify(categories));

    return categories;
  }
}
export default new CategoryModel();

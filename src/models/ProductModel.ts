import {observable, action, computed} from 'mobx';
import {Api} from 'utils/Api';
import AsyncStorage from '@react-native-community/async-storage';
import {IProduct} from 'utils/Interfaces';

const STORAGE_PRODUCTS = '@Products';
const STORAGE_LATEST = '@Products-latest';
const STORAGE_ACTION = '@Products-action';

type ISection = 'latests' | 'actions';

class ProductModel {
  @observable
  products: Record<string, IProduct> = {}; // все продукты
  @observable
  latests: string[] = []; // новинки
  @observable
  actions: string[] = []; // акции

  constructor() {
    this.init();
  }

  @action
  private async init() {
    const res = await AsyncStorage.getItem(STORAGE_PRODUCTS);
    if (res) {
      const products = JSON.parse(res);
      this.products = products;
      this.initSections('latests', STORAGE_LATEST);
      this.initSections('actions', STORAGE_ACTION);
    }
  }

  private initSections = async (section: ISection, storage: string) => {
    const res = await AsyncStorage.getItem(storage);
    if (res) {
      const storeIds: string[] = JSON.parse(res);
      const ids = storeIds.map((id) => STORAGE_PRODUCTS + id);
      const products = await AsyncStorage.multiGet(ids);

      products.forEach(([_, value]) => {
        if (value) {
          const track: IProduct = JSON.parse(value);
          this.products[track.id] = track;
        }
      });

      this[section] = storeIds;
    }
  };

  @action
  private setProductsStore = (products: IProduct[]) => {
    const data: string[][] = [];
    products.forEach((item) => {
      this.products[item.id] = item;
      data.push([STORAGE_PRODUCTS + item.id, JSON.stringify(item)]);
    });
    AsyncStorage.multiSet(data);
  };

  private _set = (
    products: IProduct[],
    section: ISection,
    storage: string,
    concat = false,
  ) => {
    const ids = products.map((item) => item.id);
    if (!concat) {
      this[section] = ids;
      AsyncStorage.setItem(storage, JSON.stringify(this[section].slice(0, 20)));
    } else {
      this[section] = this[section].concat(ids);
    }
    this.setProductsStore(products);
  };

  @action
  async getLatestsAsync(limit = 20, page = 1) {
    const res = await Api.getLatestsProducts(limit, page);
    this._set(res, 'latests', STORAGE_LATEST, page > 1);
  }

  @action
  async getActionAsync(limit = 20, page = 1) {
    const res = await Api.getActionsProducts(limit, page);
    this._set(res, 'actions', STORAGE_ACTION, page > 1);
  }

  @computed
  get Latests() {
    return this.latests.map((id) => this.products[id]);
  }

  @computed
  get Actions() {
    return this.actions.map((id) => this.products[id]);
  }
}
export default new ProductModel();

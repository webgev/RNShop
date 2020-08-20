export interface IScreenProps {
  navigation: any;
  route: any;
}
export interface IProduct {
  id: string;
  name: string;
  images: string[];
  price: string;
}

export interface IUserInfo {
  email: string;
  group: number;
  id: string;
}

export interface ICategory {
  category_id: string;
  children: ICategory[];
  name: string;
  parent_id: string;
  thumb: string;
}

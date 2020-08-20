import {CommonActions} from '@react-navigation/native';

interface NavigationProps {
  dispatch: any;
}

export class NavigationControl {
  public static navigation: NavigationProps;
  public static currentRouteName: string = '';

  public static navigate = (name: string, params?: any) => {
    NavigationControl.navigation.dispatch(
      CommonActions.navigate(name, params),
      params,
    );
  };

  static getCurrentRouteName() {
    return NavigationControl.currentRouteName;
  }

  static setCurrentRouteName(name: string) {
    NavigationControl.currentRouteName = name;
  }
}

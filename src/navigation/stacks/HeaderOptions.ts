import {StackNavigationOptions} from '@react-navigation/stack';
import {headerTitle} from 'navigation/stacks/HeaderTitle';
import {COLORS} from 'styles/Colors';
import {IRoute} from 'utils/Interfaces';

export const headerOptions = ({
  route,
}: {
  route: IRoute;
}): StackNavigationOptions => {
  return {
    headerTitle: headerTitle(route.params?.title || route.name),
    headerTintColor: COLORS.mainColor,
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {left: 10},
  };
};

import React from 'react';

import {
  HeaderBackButton,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {headerTitle} from 'navigation/stacks/HeaderTitle';
import {COLORS} from 'styles/Colors';
import {IRoute} from 'utils/Interfaces';

export const CONSTANTS = {
  paddingContent: 16,
  sizeXS: 10,
  sizeS: 12,
  sizeM: 14,
  sizeL: 16,
  sizeXL: 18,
  sizeXXL: 24,

  headerOptions: (
    {route, navigation}: {route: IRoute; navigation: any},
    canGoBack = true,
  ): StackNavigationOptions => {
    return {
      headerTitle: headerTitle(route.params?.title || route.name),
      headerLeft: () => {
        if (!canGoBack) {
          return undefined;
        }
        return (
          <HeaderBackButton
            tintColor={COLORS.grey}
            labelVisible={false}
            style={{
              left: 10,
              paddingHorizontal: 0,
            }}
            onPress={() => navigation.goBack()}
          />
        );
      },
      headerTintColor: COLORS.black,
      headerTitleAlign: 'left',
      headerTitleContainerStyle: canGoBack && {left: 50},
    };
  },
};

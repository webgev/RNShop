import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS} from 'styles/Colors';
import {HomeStack, UserStack, CartStack, CatalogStack} from './stacks/';
import {Icons} from 'components';

const Tab = createBottomTabNavigator();

export const TabsScreen = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        const color = focused ? COLORS.mainColor : COLORS.grey;
        switch (route.name) {
          case 'Home':
            return <Icons.Home color={color} />;
          case 'Catalog':
            return <Icons.Search color={color} width={20} height={20} />;
          case 'Cart':
            return <Icons.Cart color={color} />;
          case 'User':
            return <Icons.User color={color} />;
        }
      },
    })}
    initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Catalog" component={CatalogStack} />
    <Tab.Screen name="Cart" component={CartStack} />
    <Tab.Screen name="User" component={UserStack} />
  </Tab.Navigator>
);

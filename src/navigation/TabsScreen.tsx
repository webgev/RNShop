import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS} from 'styles/Colors';
import {HomeStack, UserStack, CartStack} from './stacks/';
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
          case 'Cart':
            return <Icons.Cart color={color} />;
          case 'User':
            return <Icons.User color={color} />;
        }
      },
    })}
    initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Cart" component={CartStack} />
    <Tab.Screen name="User" component={UserStack} />
  </Tab.Navigator>
);

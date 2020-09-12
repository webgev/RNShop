import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProductCardScreen, ProductListScreen} from 'screens';
import {CONSTANTS} from 'utils/Constants';
import {headerTitle} from './HeaderTitle';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={CONSTANTS.headerOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: headerTitle('Главная'),
        }}
      />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
    </Stack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen, ProductCardScreen} from 'screens';
import {headerOptions} from './HeaderOptions';

const Stack = createStackNavigator();

export function CartStack() {
  return (
    <Stack.Navigator initialRouteName="Cart" screenOptions={headerOptions}>
      <Stack.Screen name="Корзина" component={CartScreen} />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
    </Stack.Navigator>
  );
}

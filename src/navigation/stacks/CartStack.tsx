import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen, ProductCardScreen} from 'screens';
import {CONSTANTS} from 'utils/Constants';

const Stack = createStackNavigator();

export function CartStack() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={CONSTANTS.headerOptions}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
    </Stack.Navigator>
  );
}

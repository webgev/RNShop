import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProductCardScreen, ProductListScreen} from 'screens';
import {CONSTANTS} from 'utils/Constants';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={CONSTANTS.headerOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
    </Stack.Navigator>
  );
}

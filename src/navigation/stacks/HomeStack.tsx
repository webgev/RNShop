import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProductCardScreen, ProductListScreen} from 'screens';
import {headerOptions} from './HeaderOptions';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Главная" screenOptions={headerOptions}>
      <Stack.Screen
        name="Главная"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
    </Stack.Navigator>
  );
};

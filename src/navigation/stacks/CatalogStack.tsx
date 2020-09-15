import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CatalogScreen, ProductListScreen, ProductCardScreen} from 'screens';
import {headerOptions} from './HeaderOptions';

const Stack = createStackNavigator();

export function CatalogStack() {
  return (
    <Stack.Navigator initialRouteName="Каталог" screenOptions={headerOptions}>
      <Stack.Screen name="Каталог" component={CatalogScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
    </Stack.Navigator>
  );
}

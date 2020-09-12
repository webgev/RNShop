import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CatalogScreen, ProductListScreen, ProductCardScreen} from 'screens';
import {CONSTANTS} from 'utils/Constants';
import {headerTitle} from './HeaderTitle';

const Stack = createStackNavigator();

export function CatalogStack() {
  return (
    <Stack.Navigator
      initialRouteName="Catalog"
      screenOptions={CONSTANTS.headerOptions}>
      <Stack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          title: headerTitle('Каталог'),
        }}
      />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
    </Stack.Navigator>
  );
}

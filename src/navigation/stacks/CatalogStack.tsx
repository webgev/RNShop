import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CatalogScreen, ProductListScreen} from 'screens';
import {CONSTANTS} from 'utils/Constants';

const Stack = createStackNavigator();

export function CatalogStack() {
  return (
    <Stack.Navigator
      initialRouteName="Catalog"
      screenOptions={CONSTANTS.headerOptions}>
      <Stack.Screen name="Catalog" component={CatalogScreen} />
      <Stack.Screen name="ProductList" component={ProductListScreen} />
    </Stack.Navigator>
  );
}

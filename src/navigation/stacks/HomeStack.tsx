import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ProductCardScreen, ProductListScreen} from 'screens';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductCard" component={ProductCardScreen} />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={({route}) => {
          return {
            //@ts-ignore
            title: route.params?.title,
          };
        }}
      />
    </Stack.Navigator>
  );
}

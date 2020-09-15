import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreen} from 'screens';
import {headerOptions} from './HeaderOptions';

const Stack = createStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator initialRouteName="User" screenOptions={headerOptions}>
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
}

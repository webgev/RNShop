import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreen} from 'screens';

const Stack = createStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
}

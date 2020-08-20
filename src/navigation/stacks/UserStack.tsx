import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreen} from 'screens';
import {CONSTANTS} from 'utils/Constants';

const Stack = createStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={CONSTANTS.headerOptions}>
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
}

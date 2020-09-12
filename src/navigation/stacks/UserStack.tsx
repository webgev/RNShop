import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreen} from 'screens';
import {CONSTANTS} from 'utils/Constants';
import {headerTitle} from './HeaderTitle';

const Stack = createStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={CONSTANTS.headerOptions}>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          title: headerTitle('Мой профиль'),
        }}
      />
    </Stack.Navigator>
  );
}

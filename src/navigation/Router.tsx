import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from 'screens';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default function Router() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

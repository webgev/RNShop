import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from 'screens';
import {TabsScreen} from './TabsScreen';
import {NavigationControl} from 'utils/NavigationControl';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen
      name="App"
      component={TabsScreen}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default function Router() {
  const navRef = React.useRef<any>();

  return (
    <NavigationContainer
      ref={navRef}
      onReady={() => {
        NavigationControl.navigation = navRef.current;
      }}>
      <RootStackScreen />
    </NavigationContainer>
  );
}

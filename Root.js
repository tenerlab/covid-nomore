import React from 'react';
import { YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  InitScreen,
  HomeScreen,
  RiskScreen,
  SymptomsScreen,
  LocationScreen,
  ProfileScreen,
} from './src/screens';

YellowBox.ignoreWarnings(['Setting a timer']);

const Stack = createStackNavigator();

/* ********************************** NAV *********************************** */

const RootStack = () => (
  <Stack.Navigator
    initialRouteName="Init"
    screenOptions={{ gestureEnabled: false }}
  >
    <Stack.Screen
      name="Init"
      component={InitScreen}
      options={{ title: 'Covid No More', headerShown: false }}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
      initialParams={{}}
    />
    <Stack.Screen
      name="Risk"
      component={RiskScreen}
      options={{ headerShown: false }}
      initialParams={{}}
    />
    <Stack.Screen
      name="Symptoms"
      component={SymptomsScreen}
      options={{ headerShown: false }}
      initialParams={{}}
    />
    <Stack.Screen
      name="Location"
      component={LocationScreen}
      options={{ headerShown: false }}
      initialParams={{}}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
      initialParams={{}}
    />
  </Stack.Navigator>
);

export const Root = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

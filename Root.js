import React from 'react';
import { YellowBox } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  HeaderBackButton,
} from 'react-navigation';
import {
  InitScreen,
  RiskScreen,
  SymptomsScreen,
  LocationScreen,
  ProfileScreen,
} from './src/screens';

YellowBox.ignoreWarnings(['Setting a timer']);

const RootStack = createStackNavigator(
  {
    InitScreen,
    RiskScreen,
    SymptomsScreen,
    LocationScreen,
    ProfileScreen,
  },
  {
    initialRouteName: 'InitScreen',
    defaultNavigationOptions: ({ navigation }) => {
      const parent = navigation.dangerouslyGetParent();
      const hasBackButton = parent.state.routes.indexOf(navigation.state) > 0;
      return {
        headerLeft: hasBackButton ? (
          <HeaderBackButton
            onPress={() => navigation.goBack(null)}
            backTitleVisible={false}
            tintColor="white"
          />
        ) : null,
        headerStyle: {
          backgroundColor: '#de2922',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  }
);

export const Root = createAppContainer(RootStack);

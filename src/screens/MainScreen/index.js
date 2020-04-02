import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { dotPathOr } from 'ramda-extension';
import { HomeScreen } from '@root/screens/HomeScreen';
import { InfoScreen } from '@root/screens/InfoScreen';
import { styles } from './styles';

const Tab = createMaterialBottomTabNavigator();

// eslint-disable-next-line
export const MainScreen = ({ navigation, route }) => {
  let initialTabName =
    dotPathOr(null, 'params.initialTabName', route) || 'Risk';

  const tabBarIconSize = 26;

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={initialTabName}
        activeColor="#1EC0FF"
        inactiveColor="#7B7B7B"
        barStyle={{ backgroundColor: '#ffffff' }}
        labeled={true}
        shifting={true}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={tabBarIconSize}
              />
            ),
            tabBarColor: '#ffffff',
          }}
        />
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="information-variant"
                color={color}
                size={tabBarIconSize}
              />
            ),
            tabBarColor: '#ffffff',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { dotPathOr } from 'ramda-extension';
import { RiskScreen } from '@root/screens/RiskScreen';
import { SymptomsScreen } from '@root/screens/SymptomsScreen';
import { LocationScreen } from '@root/screens/LocationScreen';
import { ProfileScreen } from '@root/screens/ProfileScreen';

import { styles } from './styles';

const Tab = createMaterialBottomTabNavigator();

// eslint-disable-next-line
export const HomeScreen = ({ navigation, route }) => {
  let initialTabName =
    dotPathOr(null, 'params.initialTabName', route) || 'Risk';

  const tabBarIconSize = 26;

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={initialTabName}
        activeColor="#ffffff"
        inactiveColor="#999999"
        barStyle={{ backgroundColor: '#133549' }}
        labeled={true}
        shifting={true}
      >
        <Tab.Screen
          name="Risk"
          component={RiskScreen}
          options={{
            tabBarLabel: 'Risk',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="shield-account-outline"
                color={color}
                size={tabBarIconSize}
              />
            ),
            tabBarColor: '#133549',
          }}
        />
        <Tab.Screen
          name="Symptoms"
          component={SymptomsScreen}
          options={{
            tabBarLabel: 'Symptoms',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="doctor"
                color={color}
                size={tabBarIconSize}
              />
            ),
            tabBarColor: '#236055',
          }}
        />
        <Tab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            tabBarLabel: 'Location',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="map-marker"
                color={color}
                size={tabBarIconSize}
              />
            ),
            tabBarColor: '#494449',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={tabBarIconSize}
              />
            ),
            tabBarColor: '#333338',
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

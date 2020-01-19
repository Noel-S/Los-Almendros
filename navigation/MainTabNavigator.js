import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import Scanner from '../screens/ScannerScreen';
import SalesScreen from '../screens/SalesScreen';
import RoutesScreen from '../screens/RoutesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/**
 * Stack de scanner
 */
const ScannerStack = createStackNavigator(
  {
    Scanner: Scanner,
  },
  config
);

ScannerStack.navigationOptions = {
  tabBarLabel: 'Escanear',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-qr-scanner'
    />
  ),
};

ScannerStack.path = '';

/**
 * Stack de ventas
 */
const SalesStack = createStackNavigator(
  {
    Sales: SalesScreen,
  },
  config
);

SalesStack.navigationOptions = {
  tabBarLabel: 'Ventas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-calendar' />
  ),
};

SalesStack.path = '';

/**
 * Stack de rutas
 */
const RoutesStack = createStackNavigator(
  {
    Routes: RoutesScreen,
  },
  config
);

RoutesStack.navigationOptions = {
  tabBarLabel: 'Rutas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='md-git-pull-request' />
  ),
};

RoutesStack.path = '';

/**
 * Stack de perfil
 */
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Información',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-contact' />
  ),
};

SettingsStack.path = '';

const bottomNavigatorRoutes = {
  ScannerStack,
  SalesStack,
  RoutesStack,
  SettingsStack,
};

const bottomNavigatorConfigs = {
  initialRouteName: 'SalesStack',
  tabBarOptions: {
    style: { 
      height: 60 
    },
    labelStyle: {
      marginBottom: 10
    }
  },
};

const tabNavigator = createBottomTabNavigator(bottomNavigatorRoutes, bottomNavigatorConfigs);

tabNavigator.path = '';

export default tabNavigator;

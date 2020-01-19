import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import HelpScreen from '../screens/HelpScreen';
import RegisterSale from '../screens/RegisterSale';
import LoginScreen from '../screens/LoginScreen';

export default createAppContainer(
  createSwitchNavigator({
    App: createStackNavigator({
      Main: {
        screen: MainTabNavigator,
        navigationOptions: {
          header: null
        }
      },
      Help: {
        screen: HelpScreen,
        navigationOptions: {
          headerLeftContainerStyle: {
            marginTop: -26,
            marginRight: 8
          },
        }
      },
      RegisterSale: {
        screen: RegisterSale,
        navigationOptions: {
          headerLeftContainerStyle: {
            marginTop: -26,
            marginRight: 8
          },
        }
      },
    }),
    Login: createStackNavigator({
      HelpLogin: {
        screen: HelpScreen,
        navigationOptions: {
          headerLeftContainerStyle: {
            marginTop: -26,
            marginRight: 8
          },
        }
      },
      LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
          header: null
        }
      },
    }, {
      initialRouteName: 'LoginScreen',
    })
  }, {
    initialRouteName: 'Login',
  })
);

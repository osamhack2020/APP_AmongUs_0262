import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import HomeTab1 from './HomeTab/HomeTab1';
import HomeTab2 from './HomeTab/HomeTab2';
import HomeTab3 from './HomeTab/HomeTab3';
import HomeTab4 from './HomeTab/HomeTab4';
import HomeTab5 from './HomeTab/HomeTab5';

const HomeTabNav=createMaterialTopTabNavigator(
  {
    HomeTab1: {
      screen: HomeTab1,
    },
    HomeTab2: {
      screen: HomeTab2,
    },
    HomeTab3: {
      screen: HomeTab3,
    },
    HomeTab4: {
      screen: HomeTab4,
    },
    HomeTab5: {
      screen: HomeTab5,
    },
  },
  {
    defaultNavigationOptions: () => ({
      tabBarOptions: {
        style: {
          backgroundColor: '#2c6e49',
        },
      },
    }),
  },
);
const HomeContainer=createAppContainer(HomeTabNav);
class HomeScreen extends React.Component {
  render() {
    return <HomeContainer></HomeContainer>
  }
}
export default HomeScreen;
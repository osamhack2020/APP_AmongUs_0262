import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import LikedScreen from './LikedScreen';
import SearchScreen from './SearchScreen';
import SettingsScreen from './SettingsScreen';

const MainNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Liked: {
      screen: LikedScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Liked') {
          iconName = 'ios-star';
        } else if (routeName === 'Search') {
          iconName = 'ios-search';
        } else if (routeName === 'Settings') {
          iconName = 'ios-settings';
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
      tabBarOptions: {
        activeTintColor: 'limegreen',
      },
    }),
  },
);

const MainContainer=createAppContainer(MainNav);

class MainScreen extends React.Component {
  render() {
    return <MainContainer></MainContainer>
  }
}

export default MainScreen;
import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TextInput, Button, ActivityIndicator } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import LikedScreen from './screens/LikedScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';

class LoadingScreen extends React.Component {

  render() {
    return (
      <View style={styles.loadingcontainer}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
        <Button title="Move to LoginScreen" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    )
  }
};

class LoginScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  render() {
    return (
      <View style={styles.logincontainer}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={
            { color: 'red' }
          }>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.logintextInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.logintextInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title='Sign in' onPress={() => this.props.navigation.navigate('Main')} />
        <Button
          title='Sign Up'
        //onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
};

const MainNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Explore: {
      screen: SearchScreen,
    },
    Liked: {
      screen: LikedScreen,
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
        } else if (routeName === 'Explore') {
          iconName = 'ios-search';
        } else if (routeName === 'Liked') {
          iconName = 'ios-star';
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

const MainContainer = createAppContainer(MainNav);

class MainScreen extends React.Component {
  render() {
    return <MainContainer></MainContainer>
  }
};

const App = createSwitchNavigator(
  {
    Loading: {
      screen: LoadingScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Main: {
      screen: MainScreen,
    },
  }
);

const styles = StyleSheet.create({
  loadingcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logintextInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
});

export default createAppContainer(App);
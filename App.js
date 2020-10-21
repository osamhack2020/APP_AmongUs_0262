import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TextInput, Button, ActivityIndicator, TouchableOpacity } from 'react-native'
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
      <View style={styles.logincontainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Image source={require('./android/app/src/main/res/web_hi_res_512.png')} style={styles.loadingBtn} />
        </TouchableOpacity>
      </View>
    )
  }
};

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }
  render() {
    return (
      <View style={styles.logincontainer}>
        <Text style={styles.loginlogo}>군복</Text>
        <Text style={styles.loginsublogo}>군인복지종합정보</Text>
        <View style={styles.logininputView} >
          <TextInput
            style={styles.logininputText}
            placeholder='Email'
            placeholderTextColor='#2c6e49'
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.logininputView} >
          <TextInput
            secureTextEntry
            style={styles.logininputText}
            placeholder='Password'
            placeholderTextColor='#2c6e49'
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <TouchableOpacity>
          <Text style={styles.loginforgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginloginBtn} onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={styles.loginloginText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginloginText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    );
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
  logincontainer: {
    flex: 1,
    backgroundColor: '#386641',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingBtn: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 20,
  },
  loginlogo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#ffc9b9',
    marginBottom: 10
  },
  loginsublogo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#f2e8cf',
    marginBottom: 20
  },
  logininputView: {
    width: '80%',
    backgroundColor: '#6a994e',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  logininputText: {
    height: 50,
    color: '#fefee3'
  },
  loginforgot: {
    color: '#fefee3',
    fontSize: 11
  },
  loginloginBtn: {
    width: '80%',
    backgroundColor: '#d68c45',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  loginloginText: {
    color: '#fefee3'
  },
});

export default createAppContainer(App);
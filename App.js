import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainScreen from './screens/MainScreen'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Main: {
        screen: MainScreen,
      },
      Login: {
        screen: LoginScreen,
      },
      Loading: {
        screen: LoadingScreen,
      },
    },
    {
      initialRouteName: 'Loading'
    }
  )
);

class App extends React.Component {
  render() {  
    return <AppContainer></AppContainer>
  }
}

export default App;

/*export default createAppContainer(
  createSwitchNavigator(
    {
      MainScreen,
      LoginScreen,
      LoadingScreen,
    },
    {
      initialRouteName: 'LoadingScreen',
    }
  )
);*/

/*const Total = createSwitchNavigator(
  {
    Loading: {
      screen: LoadingScreen,
      path: "./screens/LoadingScreen"
    },
    Login: {
      screen: LoginScreen,
      path: "./screens/LoginScreen"
    },
  },
  {
    initialRouteName: 'Loading'
  }
)

const AppSwitch = createAppContainer(Total)
export default AppSwitch;*/
/*
export default createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen,
      MainScreen,
      LoginScreen,
    }
  )
)*/
import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/home';
import DetailScreen from './src/detail';
import LoginScreen from './src/auth';
import OtpScreen from './src/auth/otp';
import SplashScreen from './src/auth/splash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const authScreens = {
  Login: LoginScreen,
  Otp: OtpScreen,
};

const userScreens = {
  Home: HomeScreen,
  Detail: DetailScreen,
};

const Stack = createStackNavigator();

const linking = {
  prefixes: ['aulas://app'],
  config: {
    screens: {
      Home: 'home',
      Detail: {
        path: 'detail/:itemId',
        parse: {
          itemId: itemId => `${itemId}`,
        },
      },
    },
  },
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      isLoading: true,
    };
  }

  componentDidMount() {}

  render() {
    const {isLoading, isLoggedIn} = this.state;
    if (false) {
      return <SplashScreen />;
    }
    return (
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'tomato',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Detail'} component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

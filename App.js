import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from "./src/pages/LoadingScreen";
import LoginScreen from "./src/pages/LoginScreen";
import RegisterScreen from "./src/pages/RegisterScreen";
import HomeScreen from "./src/pages/HomeScreen";
import MaterialsScreen from "./src/pages/MaterialsScreen";
import Profile from "./src/pages/Profile";
import ForgetPassword from "./src/pages/ForgetPassword";

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCCmuI6SR5yKJnSCo6Brbhwb-XBZ-GvyiM",
  authDomain: "simphony-a4223.firebaseapp.com",
  databaseURL: "https://simphony-a4223.firebaseio.com",
  projectId: "simphony-a4223",
  storageBucket: "simphony-a4223.appspot.com",
  messagingSenderId: "752055305764",
  appId: "1:752055305764:web:19e8c3a3958bc7048b3ab1"
};

firebase.initializeApp(firebaseConfig)

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  }

});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,

    }
  },

  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      header: null,

    }
  },

  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null,
    }
  },

  Materials: {
    screen: MaterialsScreen,
    navigationOptions: {
      header: null,
    }
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    }
  }

});

export default createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  }, {
    headerMode: 'none',
    initialRouteName: "Loading"
  })
);
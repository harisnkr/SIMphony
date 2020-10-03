import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MaterialsScreen from "./MaterialsScreen";
import PTimetable from "./PTimetable";
import AboutThisApp from "./AboutThisApp";
import Profile from "./Profile";

export default createMaterialBottomTabNavigator(
    {
        Timetable: {
            screen: PTimetable, navigationOptions: {
                tabBarLabel: 'Timetable',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-calendar" color={tintColor} size={24} />
                )
            }
        },


        Materials: {
            screen: MaterialsScreen, navigationOptions: {
                tabBarLabel: 'Materials',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-paper" color={tintColor} size={24} />
                )
            }
        },

        Profile: {
            screen: Profile, navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-person" color={tintColor} size={24} />
                )
            }
        },
    },

    {
        shifting: true,
        initialRouteName: 'Profile',
        activeColor: '#f0edf6',
        inactiveColor: '#004a2f',
        barStyle: { backgroundColor: '#009862' },
    }

);

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import NewCalendar from '../components/NewCalendar';

export default class PTimetable extends React.Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 30, marginLeft: 15 }}>
                    <Text style={styles.greeting}>Welcome, {this.state.displayName}!</Text>
                </View>
                <NewCalendar />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        alignSelf: "center",
        alignContent: 'stretch',
    },

    greeting: {
        textDecorationStyle: 'solid',
        textTransform: 'capitalize',
        fontSize: 23,
        alignItems: 'center',
    }
});

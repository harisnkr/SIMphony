import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Image
                    style={styles.logoStyle}
                    source={require('../../assets/SIMlogo.png')} />
                <Text style={styles.greeting}>SIMphony Login</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>SIM myMail</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            // placeholder = 'johnd001@mymail.sim.edu.sg'
                            // placeholderTextColor = '#3d3d3d'
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 32 }}
                    onPress={() => this.props.navigation.navigate("ForgetPassword")}>
                    <Text style={{ color: "#fff", fontSize: 13 }}>
                        Forget your password? <Text style={{ fontWeight: "500", color: "#009862" }}>Reset it</Text>
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignSelf: "center", marginTop: 15 }}
                    onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{ color: "#fff", fontSize: 13 }}>
                        Signing up to be a new tester? <Text style={{ fontWeight: "500", color: "#009862" }}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    logoStyle: {
        width: 150,
        height: 80,
        marginVertical: 15,

    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#424242',
    },
    greeting: {
        marginTop: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#fff",
        fontSize: 11,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        width: 300,
        fontSize: 15,
        color: "#fff"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#009862",
        borderRadius: 4,
        height: 52,
        width: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    troubletext: {
        textAlign: 'center',
        color: 'rgba(255,255,255,0.9)',
    },
});

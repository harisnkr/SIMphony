import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as firebase from "firebase";

export default class ForgetPassword extends React.Component {
    state = {
        email: "",
        errorMessage: null,
    };

    handleReset = () => {
        firebase
            .auth()
            .sendPasswordResetEmail(this.state.email)
            .catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 100 }}></View>
                <Text style={styles.greeting}>{`Let's get your password resetted.`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>

                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}>

                        </TextInput>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.handleReset, this.checkSuccess}>
                        <Text style={{ color: "#FFF", fontWeight: "500" }}>Reset</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
                    <Text style={{ color: "#fff", fontSize: 13 }}>
                        Already have an tester account? <Text style={{ fontWeight: "500", color: "#009862" }}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#424242',
    },
    greeting: {
        color: '#fff',
        marginTop: 32,
        fontSize: 18,
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

    status: {
        marginTop: 20,
        color: "#C8E6C9",
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
        fontSize: 10,
        textTransform: "uppercase"
    },

    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        width: 300,
        fontSize: 15,
        color: "#fff",
    },

    button: {
        marginTop: 30,
        marginHorizontal: 30,
        backgroundColor: "#009862",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});

import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';


export default function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("Your login here");

    function apiCall() {

        console.log("Calling API");


        fetch('http://localhost:8080/login?username=' + username + '&password=' + password)

            .then((response) => response.text())
            .then((text) => {
                console.log(text);
                setLogin(text);

            }).catch((error) => {
                console.log(error);
                setLogin("Error")
            });
    }
    return (
        <View>
            <TextInput
                placeholder='Enter your username'
                style={{
                    height: 40,
                    borderColor: 'blue',
                    borderWidth: 1
                }}
                onChangeText={setUsername}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Enter your password'
                style={{
                    height: 40,
                    borderColor: 'blue',
                    borderWidth: 1
                }}
                onChangeText={setPassword}
            />
            <Button
                onPress={apiCall}
                title={"Login"}
            />

            <Text style={styles.note}>{login}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#1e90ff',
        height: 100,
        fontSize: 24,
        alignItems: 'center',
        width: 220,
    },
    botton: {
        backgroundColor: '#1e90ff',
        padding: 5,
        color: 'white',
        fontSize: 30,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        marginHorizontal: 32,
        minWidth: 250,
        justifyContent: "center",
        borderRadius: 10,
        elevation: 5,
    },
    desmiss: {
        flex: 1,
        zIndex: -1,
    },
    note: {
        color: '#1e1e1e',
        padding: 5,
        height: 100,
        fontSize: 24,
        alignItems: 'center',
        width: 220,

    }

});
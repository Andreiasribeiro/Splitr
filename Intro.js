//to display the intro for the app
import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, setUser } from 'react';
import { View, StyleSheet, Text, Image, TextInput, StatusBar, Dimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { RoundIconBtn } from './RoundIconBtn.js';
import { AddExpenses } from './AddExpenses.js';



export default function Intro({ onFinish }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const [login, setLogin] = useState("Your login here");
    

    // const handleOnChangeText = text => {
    //   setUsername(text);
    //}

    //To store the user
    // After save the user, check if there are onFinish function
    const handleSubmit = async () => {
        const user = { username: username, token: login};
        //JSON.stringify to change the value to string, because AsyncStorage olny accept string
        await AsyncStorage.setItem('user', JSON.stringify(user));
        if (onFinish) onFinish();

    };

    function apiCall() {


        console.log("Calling API");
        if (username && password) {
            fetch('http://localhost:8080/login?username=' + username + '&password=' + password)

                .then((response) => response.text())// convert to text
                .then((text) => {
                    if (text == !username && !password) {
                        alert("username or password invalid")
                    } else {
                        console.log(text);
                        setLogin(text);
                       
                    }
                })
        }

    }

   //Press the button "Authentication" and then "Submit" to sent the token

    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>

                <Image
                    source={require("./assets/SplitrLogo.png")}
                    style={{ width: 200, height: 200, marginTop: 64 }}
                    resizeModo="contain"
                />
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder='Enter your username'
                    style={styles.textInput} />

                <TextInput
                    value={password}
                    onChangeText={setPassword}

                    placeholder='Enter your password'
                    style={styles.textInput}
                    secureTextEntry={true} />


                {password.trim().length > 3 ? (<TouchableOpacity
                    onPress={apiCall}
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Authentication
                        </Text>
                </TouchableOpacity>) : null}

                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Submit
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        apiCall();
                    }}
                    onPressIn={() => {
                        handleSubmit();
                    }}
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Mult Click
                        </Text>
                </TouchableOpacity>


            </View>
        </>
    );
}
//imported dimentions from reatc-native
const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        borderWidth: 2,
        borderColor: '#1e1e1e',
        color: '#1e1e1e',
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15,
    },

    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5,
        fontSize: 20,

    },
    loginButton: {
        width: 300,
        height: 42,
        backgroundColor: '#1e1e1e',
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width,

    },
    textButton: {

        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',

    }

});

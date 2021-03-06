
import React, { useState } from 'react';
import {
    View, StyleSheet, Button, Text, Image, TextInput,
    StatusBar, Dimensions, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback
} from 'react-native';
//import { TOKEN } from "@env";
//import { token } from 'react-native-dotenv';


export default function ScreenIntro({ navigation }) {

    //variables to store username, password and login
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("Your login here");
    

  //Fetch function to request from the endpoint in the API-Login
    function loginCall() {

 //To check if the username and password are correct. If not alert an error message
        console.log("Calling Login API");
        if (username && password) {

            fetch('http://localhost:8080/login?username=' + username + '&password=' + password)

                .then((response) => response.text())// convert to text
                .then((text) => {
                    if (text == !username || !password) {
                        alert("username or password invalid")

                    } else {

                        console.log(text);
                        setLogin(text);
                        navigation.push("NewExpenses");

                    }
                })
        }

    }
    //return an image, two input field for username and password
//One submit button, which appears only with more than 3 characters on 
//the password input and call the fetch function 
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
                    onPress={loginCall}
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Submit
                        </Text>
                </TouchableOpacity>) : null}

            </View>
        </>
    );
}
//imported dimentions from reatc-native
//Set styles
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

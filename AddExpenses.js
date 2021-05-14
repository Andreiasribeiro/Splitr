import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Intro from './Intro.js';

export function AddExpenses({ user }) {
    const [greet, setGreet] = useState('');
    const [expense, setExpense] = useState('');
    const [token, setToken] = useState("");

    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [trip, setTrip] = useState('');

    // data to be sent to the POST request
    //const data = {
    // tripID: tripID,
    // amount: amount,
    //  description: description,
    // }

    const findGreet = () => {
        const hours = new Date().getHours()
        if (hours === 0 || hours < 12) return setGreet('Morning,');
        if (hours === 1 || hours < 17) return setGreet('Afternoon,');
        setGreet('Evening,');
    }
    // to call findGreet
    useEffect(() => {
        //AsyncStorage.clear();
        findGreet();
    }, []);


    //const myHeaders = new Headers();

    //myHeaders.append('Content-Type', 'application/json');
    //myHeaders.append('Authorization', token);

    //return fetch('http://localhost:8080/' + trip + '/expense', {
     //   method: 'POST',
     //   headers: myHeaders,
    //}).then((response) => response.text())
    ///.then((text) => {
    //    console.log(text);
   //     setLogin(text);
  //  }).catch((error) => {

     //   console.log(error);
    //    setExpense("error")
    //});

    function AddExpense() {
        console.log("Calling API Expense");

        fetch('http://localhost:8080/' + trip + '/expense', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.text())
            .then((text) => {
                console.log(text);
                setLogin(text);
            }).catch((error) => {

                console.log(error);
                setExpense("error")
            });
    }

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#fff'></StatusBar>
            <View style={styles.container}>
                <Text style={styles.header}>{`Good ${greet} ${user.username}! \n  Add your expenses`}</Text>
                <Image
                    source={require("./assets/SplitrLogo.png")}
                    style={{ width: 200, height: 200, marginTop: 64 }}
                    resizeModo="contain"
                />
                <TextInput
                    placeholder='Enter the tripID'
                    style={styles.textInput} />

                <TextInput
                    placeholder='Enter the expense'
                    style={styles.textInput} />

                <TextInput
                    placeholder='Enter the amount'
                    style={styles.textInput} />

                <TouchableOpacity
                    value={expense}
                    onChangeText={setExpense}
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Add Expense
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Expense list
                        </Text>
                </TouchableOpacity>
                <Text>  Expense list here</Text>

            </View>
        </>
    )
};
const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e1e1e',
        paddingLeft: 25,
        paddingTop: 20,

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
    textInput2: {
        borderWidth: 2,
        borderColor: '#1e1e1e',
        color: '#1e1e1e',
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 25,
        fontSize: 25,
        marginBottom: 15,
        marginTop: 15,
    }

});

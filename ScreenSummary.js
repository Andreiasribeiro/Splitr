import React, { useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';


export default function ScreenSummary({ navigation }) {

    const [trip, setTrip] = useState('');
    const [summary, setSummary] = useState('');

    function GetSummary() {
        console.log("Calling API Expense");
        fetch('http://localhost:8080/' + trip + '/summary')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setSummary(json);
            }).catch((error) => {
                console.log(error);
                setSummary("error")
            });
    }

    return (
        <>

            <View style={styles.container}>
            <Text>ScreenSummary</Text>
                <Image
                    source={require("./assets/SplitrLogo.png")}
                    style={{ width: 200, height: 200, marginTop: 64 }}
                    resizeModo="contain"
                />
                <Text>The summary of your trip </Text>

                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('AddExpense')

                    }}

                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Add another trip
                   </Text>
                </TouchableOpacity>


                <FlatList>{summary}</FlatList>

            </View>
        </>
    )
};

//imported dimentions from reatc-native
//Set styles
const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
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

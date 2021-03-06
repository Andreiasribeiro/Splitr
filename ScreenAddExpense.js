import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions, TextInput, TouchableOpacity, Image, Flaylist } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//import { TOKEN } from "@env";
//import { login } from './ScreenIntro';


export default function ScreenAddExpense({ navigation }) {

    //variables to store description, amount, trip name and expenses
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [trip, setTrip] = useState('');
    const [expense, setExpense] = useState('');


    //Fetch function to request from the endpoint in the API - Add expense
    function AddExpense() {
        console.log("Calling API Expense");
        fetch('http://localhost:8080/' + trip + '/expense', {
            method: "POST",
            body: JSON.stringify({
                tripId: trip,
                amount: amount,
                description: description,
            }),
            headers: {
                "Content-type": "application/json ; charset=UTF-8",
                "Authorization": "Bearer" + login,
                //"Authorization": `Bearer ${TOKEN}`
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setExpense(json);


            }).catch((error) => {
                console.log(error);
                console.error(error)
                setExpense("error")

            });
    }
    //return an image, trhee input field for tripID, description and amount
    //One button to call the fetch function - AddExpense
    //Another button to navigate to ScreenListExpenses
    return (
        <>

            <View style={styles.container}>
            <Text>ScreenAddExpenses</Text>
                <Image
                    source={require("./assets/SplitrLogo.png")}
                    style={{ width: 200, height: 200, marginTop: 64 }}
                    resizeModo="contain"
                />


                <TextInput

                    placeholder='Enter the tripID'
                    style={styles.textInput}
                    onChangeText={setTrip} />

                <TextInput

                    placeholder='Enter the description'
                    style={styles.textInput}
                    onChangeText={setDescription} />


                <TextInput

                    placeholder='Enter the amount'
                    style={styles.textInput}
                    onChangeText={setAmount} />



                <TouchableOpacity

                    onPress={AddExpense}
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Add Expense
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('ListExpenses')

                    }}

                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        See Expenses
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Intro')
                    }}
                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Login another user
                        </Text>
                </TouchableOpacity>

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

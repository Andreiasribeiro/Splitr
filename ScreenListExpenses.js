import React, { useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
//import { TOKEN } from "@env";

export default function ScreenListExpenses({ navigation }) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [trip, setTrip] = useState('');
    const [list, setList] = useState('');


    //Fetch function to request from the endpoint in the API - List expenses
    function ListExpenses() {
        console.log("Calling API Expense");
        fetch('http://localhost:8080/' + trip, {
            method: "GET",
            body: JSON.stringify({
                tripId: trip,
                amount: amount,
                description: description,
            }),

        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setList(json);


            }).catch((error) => {
                console.log(error);
                console.error(error)
                setList("error")

            });

        //  const table = json.split('\n').slice(1);
        // rows.forEach(row => {
        //   const columns = row.split(',');
        //  const trip = row[0];
        //   const description = columns[1];
        //  const amount = columns[2];
        //   const username = columns[3];
        //  console.log(trip, description, amount, username);

        //  })
    }
    //return an image and one button to list all expenses
    return (
        <>

            <View style={styles.container}>
<Text>ScreenListExpenses</Text>
                <Image
                    source={require("./assets/SplitrLogo.png")}
                    style={{ width: 200, height: 200, marginTop: 64 }}
                    resizeModo="contain"
                />


                <TouchableOpacity

                    onPress={ListExpenses}

                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        See Expenses
                        </Text>
                </TouchableOpacity>


                
                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('GetSummary')

                    }}

                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Get the Summary
                        </Text>
                </TouchableOpacity>

                
                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('AddExpense')

                    }}

                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Add Expenses
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('CloseTrip')

                    }}

                    style={styles.loginButton}
                >
                    <Text style={styles.textButton}>
                        Close Trip
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


                <FlatList
                > {list}</FlatList>




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

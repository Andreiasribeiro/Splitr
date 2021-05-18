import React from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';


export default function ScreenListExpenses({ navigation }) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [trip, setTrip] = useState('');
    const [expense, setExpense] = useState('');
    const [list, setList] = useState('');


    function ListExpense() {
        console.log("Calling API Expense");
        fetch('http://localhost:8080/' + trip, {
            method: "GET",
            body: JSON.stringify({
                tripId: trip,
                amount: amount,
                description: description,
                usernama: username,
            }),
            headers: {
                "Content-type": "application/json",
                "Authorization": token,
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setList(json);


            }).catch((error) => {

                console.log(error);
                setList("error")

            });

        const table = json.split('\n').slice(1);
        rows.forEach(row => {
            const columns = row.split(',');
            const trip = row[0];
            const description = columns[1];
            const amount = columns[2];
            const username = columns[3];
            console.log(trip, description, amount, username);

        })
    }

    return (

        <Text>Hello, I am your component two!</Text>

    );


}
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


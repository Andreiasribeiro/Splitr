import React from 'react';
import {View, StyleSheet} from 'react-native';

export function ListExpense() {


    async function getData() {
        const list = await fetch("http://localhost:8080/trip")
        .then(req => req.json())
        .then((response) => response.json())
        .then((json) => {
        console.log(json);
        });

    }

return (
    <View style = {styles.container }></View>
)
};

const styles = StyleSheet.create({
    container: {}
});

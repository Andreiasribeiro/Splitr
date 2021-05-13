import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

export default function Weather(props) {

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [country, setCountry] = useState("Your country here");

    function apiCall() {

        console.log("Calling API");

                    fetch('http://api.opencagedata.com/geocode/v1/json?q=' + lat + "+" + long + '&key=27f7a27433144a1baf0cc3e7f3c4b5f4')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json.results[0].components.country);
                    setCountry(json.results[0].components.country);

                }).catch((error) => {
                    console.log(error);
                    setCountry("Error")
                });

        }

        return (
            <View>
                <TextInput style={{
                    height: 40,
                    borderColor: 'blue',
                    borderWidth: 1
                }}
                    onChangeText={setLat}
                />
                <TextInput style={{
                    height: 40,
                    borderColor: 'blue',
                    borderWidth: 1
                }}
                    onChangeText={setLong}
                />
                <Button
                    onPress={apiCall}
                    title={"Find Country"}
                />
                
                <Text>{country}</Text>
            </View>
        );
    }
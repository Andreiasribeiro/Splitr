import React from 'react';
import { Text, View, Button } from 'react-native';

export default function ScreenOne({ navigation }) {

    return (

        <View>
            <Text>Hello</Text>
            <Button
                onPress={() => {
                    navigation.navigate('Two')
                }}
                title="Go to Screen Two"
            />
            <TextInput style={{
                height: 40,
                borderColor: 'blue',
                borderWidth: 1
            }}
                onChangeText={}
            />
            <TextInput style={{
                height: 40,
                borderColor: 'blue',
                borderWidth: 1
            }}
                onChangeText={}
            />
        </View>
    );
}
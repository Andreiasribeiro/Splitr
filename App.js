import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Intro from './Intro.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { AddExpenses } from './AddExpenses.js';

export default function App() {
  const [user, setUser] = useState({})

  //To fit the user
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user')
    console.log(result);
    if (result !== null) {
      setUser(JSON.parse(result))
    }

  }
  useEffect(() => {
    AsyncStorage.clear();
    findUser()
   
  }, [])

  //if there is no user reder the intro screen,otherwise render AddExpense
  if (!user.username) return <Intro onFinish ={findUser}/>;
  return   <AddExpenses user={user} />


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
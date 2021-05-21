import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenIntro from './ScreenIntro';
import ScreenAddExpense from './ScreenAddExpense';
import ScreenListExpenses from './ScreenListExpenses';
import ScreenNewExpenses from './ScreenNewExpenses';
import ScreenCloseTrip from './ScreenCloseTrip';
import ScreenSummary from './ScreenSummary';


const navigator = createStackNavigator(
  {
    //list of all screens
    Intro: ScreenIntro,
    AddExpense: ScreenAddExpense,
    ListExpenses: ScreenListExpenses,
    NewExpenses: ScreenNewExpenses,
    CloseTrip: ScreenCloseTrip,
    GetSummary: ScreenSummary,
  },
  {
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
      title: 'Splitr App',
    },
  }
);
//To call the functio to navigate
export default createAppContainer(navigator);
//Set styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

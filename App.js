import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenIntro from './ScreenIntro';
import ScreenAddExpense from './ScreenAddExpense';
import ScreenListExpenses from './ScreenListExpenses';


const navigator = createStackNavigator(
  {
  Intro: ScreenIntro,
  AddExpense: ScreenAddExpense,
  ListExpenses: ScreenListExpenses,
  },
  {
  initialRouteName: 'Intro',
  defaultNavigationOptions: {
  title: 'Splitr App',
  },
  }
  );
  export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

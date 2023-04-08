/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  View,
  ScrollView
} from 'react-native';

import contacts from './assets/data/contacts.json';
import ContactScreen from './src/screens/ContactScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCall from './src/screens/IncomingCall';
import CallActionScreen from './src/components/CallActionScreen';
import CallScreen from './src/screens/CallScreen';
import { NavigationContainer } from '@react-navigation/native';
import navigation from './src/Navigation';
import Navigation from './src/Navigation';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>

      <StatusBar
        barStyle={ 'default' }/>
        <Navigation/>
        </>
    
  );
}

const styles = StyleSheet.create({

});

export default App;

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './android/app/signup';
import SignIn from './android/app/signIn';
import Dashboard from './android/app/dashboard';
const Stack=createStackNavigator()
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='signup' component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name='signin' component={SignIn} options={{headerShown:false}}/>
      <Stack.Screen name='dashboard' component={Dashboard} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


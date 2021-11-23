import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Home from './screens/Home';
import Login from './screens/Login'

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Home} name="home" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

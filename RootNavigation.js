import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Home from './screens/Home';
import Login from './screens/Login'
import Register from './screens/Register';
import QrCodeScreen from './screens/QrCodeScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen component={Login} name="login" />
        <Stack.Screen component={Register} name="register" />
        <Stack.Screen component={QrCodeScreen} name='qrcode' options={{title:"İlaç Tanıma Servisi"}} />
        <Stack.Screen component={Home} name="home" options={{title: "Anasayfa"}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

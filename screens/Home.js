import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNavigation from '../BottomNavigation';

const Home = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);  

  return (
    <BottomNavigation />
  )
}

export default Home

const styles = StyleSheet.create({})

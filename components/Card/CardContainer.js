import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardContainer = ({children, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {children}
    </View>
  )
}

export default CardContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    margin: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
})

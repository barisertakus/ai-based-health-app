import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";

const HeartGraph = () => {
  return (
    <View style={styles.container}>
      <Image style={{width: ScreenWidth}} source={require("../../assets/images/heart-rate-graph.png")} />
    </View>
  );
};

export default HeartGraph;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D74C4",
    height: ScreenHeight / 4,
    width: "100%",
    position: "absolute",
    bottom: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

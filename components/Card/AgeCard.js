import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CardContainer from "./CardContainer";

const AgeCard = () => {
  return (
    <CardContainer containerStyle={styles.cardContainer}>
      <View style={styles.ageContainer}>
        <Text style={[styles.ageHeader,styles.margin]}>Sağlık Yaşın</Text>
        <Text style={[styles.age, styles.margin]}>25</Text>
        <Text style={[styles.regularText, styles.margin, {paddingLeft: 10}]}>yaş</Text>
      </View>
      <View style={styles.graph}>
        <Image style={styles.image} source={require("../../assets/images/bar-graph.png")} />
        <Text style={styles.regularText}>
          Tebrikler, sağlıklı görünüyorsunuz!
        </Text>
      </View>
    </CardContainer>
  );
};

export default AgeCard;

const styles = StyleSheet.create({
  cardContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
  },
  ageContainer:{},
  margin:{
    margin: 5,
  },
  ageHeader: {
    fontSize: 16,
    fontWeight: "500"
  },
  age: {
    fontSize: 45,
    fontWeight: "bold",
  },
  regularText: {
    color: "#999999",
  },
  graph:{
    alignItems: "flex-end",
  },
  image:{
    marginBottom: 20
  }
});

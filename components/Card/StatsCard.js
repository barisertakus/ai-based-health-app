import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CardContainer from "./CardContainer";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ScreenWidth } from "react-native-elements/dist/helpers";

const StatsCard = ({header, value, extraText, average, underAvg, cardStyle}) => {
  return (
    <CardContainer containerStyle={[styles.cardContainer, cardStyle]}>
      <Text style={[styles.header, styles.margin]}>{header}</Text>
      <View style={styles.valueContainer}>
        <Text style={[styles.value, styles.margin]}>{value}</Text>
        <Text style={styles.extraText}>{extraText}</Text>
      </View>
      <Text style={[styles.regularText, styles.margin]}>Ortalamanın</Text>
      <View style={[styles.average, styles.margin]}>
        <Text style={styles.averageText}>{average + (underAvg ? "% Altında" : "% Üstünde")}</Text>
        <Icon name={underAvg ? "expand-more" : "expand-less"} size={24} />
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/bar-graph.png")}
      />
    </CardContainer>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    paddingVertical: 30,
    marginTop: 10,
    maxWidth: ScreenWidth / 2,
  },
  header: {
    fontSize: 16,
    fontWeight: "600",
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  value: {
    fontSize: 45,
    fontWeight: "500",
  },
  margin: {
    margin: 5,
  },
  regularText: {
    color: "#999999",
  },
  extraText:{
    marginBottom: 12
  },
  average: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginTop: 10,
  },
  averageText: {},
});

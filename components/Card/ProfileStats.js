import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StatsCard from "./StatsCard";

const ProfileStats = () => {
  return (
    <View style={styles.cards}>
      <StatsCard
        header="Kalori"
        value="2,4K"
        average={53}
        underAvg
        cardStyle={styles.card}
      />
      <StatsCard
        header="Kalp Atış Hızı"
        value="100"
        extraText="bpm"
        average={53}
      />
    </View>
  );
};

export default ProfileStats;

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginRight: 0,
  },
});

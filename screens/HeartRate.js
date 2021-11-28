import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/Card/ProfileCard";
import HeartGraph from "../components/HeartRate/HeartGraph";
import HeartProgress from "../components/HeartRate/HeartProgress";
import ProfileHeader from "../components/ProfileHeader";

const HeartRate = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader header="Kalp Ritmin" smallHeader="Merhaba, Can 👋" navigation={navigation} />
      <ProfileCard />
      <View style={styles.heartProgress}><HeartProgress /></View>
      <HeartGraph />
    </SafeAreaView>
  );
};

export default HeartRate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  heartProgress:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

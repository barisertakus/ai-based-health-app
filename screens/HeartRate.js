import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenHeight } from "react-native-elements/dist/helpers";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/Card/ProfileCard";
import ProfileHeader from "../components/ProfileHeader";

const HeartRate = ({navigation}) => {
 
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false});
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader header="Kalp Ritmin" smallHeader="Merhaba, Can 👋" />
      <ProfileCard />
    </SafeAreaView>
  );
};

export default HeartRate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  }
});

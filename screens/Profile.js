import React, { useLayoutEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/Card/ProfileCard";
import ProfileHeader from "../components/ProfileHeader";
import AgeCard from "../components/Card/AgeCard";
import ProfileStats from "../components/Card/ProfileStats";

const Profile = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader />
        <ProfileCard />
        <AgeCard />
        <ProfileStats />
        {/* -cards- */}
        {/* age card */}
        {/* heart rate cards */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  }
});

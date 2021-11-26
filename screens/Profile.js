import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "../components/Card/ProfileCard"
import ProfileHeader from "../components/ProfileHeader";
import AgeCard from "../components/Card/AgeCard";

const Profile = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <ProfileHeader />
      <ProfileCard />
      <AgeCard />
      {/* -cards- */}
      {/* age card */}
      {/* heart rate cards */}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile:{

  }
});

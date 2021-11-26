import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import CardContainer from "./CardContainer";

const ProfileCard = () => {
  return (
    <CardContainer containerStyle={styles.cardContainer}>
      <Avatar
        rounded
        source={require("../../assets/images/avatar-profile.jpeg")}
        size={120}
        containerStyle={{borderWidth: 3, borderColor: "white"}}
      />
      <Text style={styles.profileName}>Can Yüzkollar </Text>
      <Image source={require("../../assets/images/graph-profile.png")} />
    </CardContainer>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxHeight: 100,
  },
  profileName:{
    fontSize: 18
  }
});

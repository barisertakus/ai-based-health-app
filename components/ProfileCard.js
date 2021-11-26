import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={require("../assets/images/avatar-profile.jpeg")}
        size={120}
        containerStyle={{borderWidth: 3, borderColor: "white"}}
      />
      <Text style={styles.profileName}>Can Yüzkollar </Text>
      <Image source={require("../assets/images/graph-profile.png")} />
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    margin: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    maxHeight: 100
  },
  profileName:{
    fontSize: 18
  }
});

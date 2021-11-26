import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Profil</Text>
      <TouchableOpacity>
        <Icon name="segment" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 25,
  },
});

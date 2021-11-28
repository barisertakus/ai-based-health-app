import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileHeader = ({ header, smallHeader }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={smallHeader ? styles.smallHeader : styles.none}>{smallHeader}</Text>
        <Text style={styles.headerText}>{header}</Text>
      </View>

      <TouchableOpacity>
        <Icon name="segment" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 25,
  },
  smallHeader: {
    fontSize: 17,
  },
  none:{
    display: "none",
  }
});

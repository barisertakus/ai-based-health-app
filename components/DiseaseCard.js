import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DiseaseCard = ({ selection, handlePress }) => {
  return (
    <TouchableOpacity
      style={styles.selection}
      activeOpacity={0.7}
      onPress={()=>handlePress(selection)}
    >
      <Text style={styles.selectionText}>{selection?.title}</Text>
    </TouchableOpacity>
  );
};

export default DiseaseCard;

const styles = StyleSheet.create({
  selection: {
    backgroundColor: "#2F2E41",
    padding: 20,
    margin: 5,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  selectionText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

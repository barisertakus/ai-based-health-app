import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MedicineScreen = ({ navigation, route }) => {
  const [result, setResult] = useState([]);
  const [header, setHeader] = useState("");
  const { head, medicine } = route.params;

  const formattedContent = () => {
    const content = (result && result.join(" ")) || "";
    return content;
  }

  useEffect(() => {
    if(medicine && head){
      setResult(medicine)
      setHeader(head);
    }
  }, [medicine]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 18, fontWeight: "bold", marginBottom : 20}}>{header && header}</Text>
        <Text style={{fontSize: 14}}>{formattedContent()}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MedicineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

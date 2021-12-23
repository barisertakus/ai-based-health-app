import React from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tools = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.buttons}>
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Araçlar</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("qrcode")}
        >
          <Text style={styles.btnText}>İlaç Okuma Servisi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("disease")}
        >
          <Text style={styles.btnText}>Hastalık Tanıma Servisi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Tools;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    alignItems: "center",
    paddingBottom: 20,
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  buttons: {
    flex: 0.7,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 20,
    margin: 10,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

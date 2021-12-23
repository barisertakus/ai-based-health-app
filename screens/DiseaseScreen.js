import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Autocomplete from "../components/Autocomplete";


const list = [
  { id: 1, title: "Kaşıntı" },
  { id: 2, title: "Deri döküntüsü" },
  { id: 3, title: "Nodal deri döküntüleri" },
  { id: 4, title: "Sürekli hapşırma" },
  { id: 5, title: "Titreme" },
  { id: 6, title: "Üşüme" },
  { id: 7, title: "Eklem ağrısı" },
  { id: 8, title: "Mide ağrısı" },
  { id: 9, title: "Asitlik" },
  { id: 10, title: "Dilde ülserler" },
  { id: 11, title: "Kas erimesi" },
  { id: 12, title: "Kusma" },
  { id: 13, title: "Yanma" },
];

const DiseaseScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [result, setResult] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Hastalık Algılama Ekranı</Text>
            <Text style={styles.regularTxt}>
              Lütfen sizinle ilgili olan şikayetleri seçiniz.
            </Text>
          </View>
          <View style={styles.autocomplete}>
            <Autocomplete list={list} />
          </View>
        </View>
        <View style={{ flex: 0.5 }}>
          <View style={styles.selections}>
            <ScrollView>
              <View style={styles.selection}>
                <Text style={styles.selectionText}>Test</Text>
              </View>
              <View style={styles.selection}>
                <Text style={styles.selectionText}>Test</Text>
              </View>
              <View style={styles.selection}>
                <Text style={styles.selectionText}>Test</Text>
              </View>
              <View style={styles.selection}>
                <Text style={styles.selectionText}>Test</Text>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>GÖNDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DiseaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: "600",
  },
  regularTxt: {
    fontSize: 14,
    paddingTop: 10,
  },
  autocomplete: {
    paddingTop: 20,
  },
  button: {
    backgroundColor: "orange",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignItems: "center"
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  selections: {
    flex: 1,
  },
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

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Autocomplete from "../components/Autocomplete";
import DiseaseCard from "../components/DiseaseCard";

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

  const [selections, setSelections] = useState([]);
  const [diseaseList, setDiseaseList] = useState(list);

  const [prediction, setPrediction] = useState([]);

  const [result, setResult] = useState("");

  const formatPrediction = () => {
    let tempList = [];
    for (let i = 0; i < 132; i++) {
      for (let j = 0; j < selections.length; j++) {
        if (i === selections[j]?.id - 1) {
          tempList[i] = 1;
        } else {
          tempList[i] = 0;
        }
      }
    }

    axios
      .get(
        "https://flask-api-medicine.herokuapp.com/predict/?predict=" + tempList
      )
      .then((response) => setResult(response.data.Message))
      .catch((error) => console.log(error));
  };

  const clearPrediction = () => {
    setPrediction([]);
    setSelections([]);
    setDiseaseList(list)
    setResult("");
  }

  // const handleSubmit = () => {
  //   axios
  //     .get(
  //       "https://flask-api-medicine.herokuapp.com/predict/?predict=0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
  //     )
  //     .then((response) => setResult(response.data.Message))
  //     .catch((error) => console.log(error));
  // };

  const handleSelect = (select) => {
    if (select) {
      setSelections([...selections, select]);
      setDiseaseList(diseaseList.filter((disease) => disease.id !== select.id));
    }
  };

  const handlePress = (remove) => {
    if (remove) {
      setSelections(
        selections.filter((selection) => selection.id !== remove.id)
      );

      let list = [...diseaseList];
      list.splice(remove.id - 1, 0, remove);
      setDiseaseList(list);
    }
  };

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
            <Autocomplete list={diseaseList} handleSelect={handleSelect} />
          </View>
        </View>
        <View style={{ flex: 0.45 }}>
          <View style={styles.selections}>
            <ScrollView>
              {selections.map((selection) => {
                return (
                  <DiseaseCard
                    key={selection.id}
                    selection={selection}
                    handlePress={handlePress}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={{ alignItems: "center", paddingBottom: 10 }}>
            <Text style={{ fontSize: 18 }}>
              {result && " Yeniden denemek için tıklayın "}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => !result ? formatPrediction() : clearPrediction()}
          >
            <Text style={styles.btnText}>
              {result ? "HASTALIK : " + result : "GÖNDER"}
            </Text>
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
    paddingBottom: 20,
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
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  selections: {
    flex: 1,
  },
});

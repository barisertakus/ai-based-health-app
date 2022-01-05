import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export default function QrCodeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const drugsApi = (data) => {
    axios
      .post("https://drugs-flask.herokuapp.com/", { barcode: data })
      .then((response) => setResult(response.data.Value))
      .catch((error) => {console.log(error); setError(JSON.stringify(error))});
  };

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // useEffect(() => {
  //   drugsApi();
  // }, [text]);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
    drugsApi(data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400,  }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && (
        <SafeAreaView style={{flex : 1}}>
        <Button
          title={"Scan again?"}
          onPress={() => setScanned(false)}
          color="tomato"
        />
        <ScrollView>
          <Text>{(result && result.join(' ')) || error}</Text>
        </ScrollView>
        </SafeAreaView>
      )}
      {
       
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: 350,
    width: 350,
    overflow: "hidden",
    marginTop: 30,
    borderRadius : 10,
  },
});

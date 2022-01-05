import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import RootNavigation from "./RootNavigation";

LogBox.ignoreLogs([
  "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45."])

export default function App() {
  return <RootNavigation />;
}

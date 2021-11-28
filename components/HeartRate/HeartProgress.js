import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import Icon from "react-native-vector-icons/MaterialIcons";

const HeartProgress = () => {
  const [progress, setProgress] = useState(1);
  const realProgress = 50;

  useEffect(()=>{
    setProgress(1);
  },[])

  useEffect(() => {
    if (progress != realProgress)
      setTimeout(() => {
        setProgress(progress + 1);
      }, 5);
  }, [progress]);

  return (
    <View style={styles.container}>
        <ProgressCircle
          percent={progress}
          radius={80}
          borderWidth={12}
          color="#2D14C4"
          shadowColor="#fff"
          bgColor="#E5E5E5"
        >
          <View style={styles.progressInput}>
            <Icon name="favorite-border" size={24} color="green" />
            <Text style={styles.heartRate}>{progress}</Text>
            <Text style={styles.regularText}>bpm</Text>
          </View>
        </ProgressCircle>
    </View>
  );
};

export default HeartProgress;

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
  },
  progressInput: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  heartRate: {
    fontSize: 30,
    fontWeight: "600",
  },
  regularText: {},
});

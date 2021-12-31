import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import axios from "axios";
import * as Google from "expo-auth-session/providers/google";
import deviceStorage from "../utils/deviceStorage";

export default function GoogleFitScreen() {
  const [reqError, setReqError] = useState("");
  const [authData, setAuthData] = useState({});
  const [token, setToken] = useState("");
  const [data, setData] = useState(0);
  const [googleToken, setGoogleToken] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "1053050140828-0jt8ok31he2a0me7vfkg8ppgivs3f69m.apps.googleusercontent.com",
    iosClientId:
      "1053050140828-ffpig1m3qtq6d9mod6nnl5mput643qub.apps.googleusercontent.com",
    androidClientId:
      "1053050140828-iuu2vfvkpq2nkatrkitptjmf8bqb4ts5.apps.googleusercontent.com",
    scopes: [
      "https://www.googleapis.com/auth/fitness.activity.read",
      "https://www.googleapis.com/auth/fitness.activity.write",
      // "https://www.googleapis.com/auth/fitness.blood_glucose.read",
      // "https://www.googleapis.com/auth/fitness.blood_glucose.write",
      // "https://www.googleapis.com/auth/fitness.blood_pressure.read",
      // "https://www.googleapis.com/auth/fitness.blood_pressure.write",
      // "https://www.googleapis.com/auth/fitness.body.read",
      // "https://www.googleapis.com/auth/fitness.body.write",
      // "https://www.googleapis.com/auth/fitness.body_temperature.read",
      // "https://www.googleapis.com/auth/fitness.body_temperature.write",
      // "https://www.googleapis.com/auth/fitness.heart_rate.read",
      // "https://www.googleapis.com/auth/fitness.heart_rate.write",
      // "https://www.googleapis.com/auth/fitness.location.read",
      // "https://www.googleapis.com/auth/fitness.location.write",
      // "https://www.googleapis.com/auth/fitness.nutrition.read",
      // "https://www.googleapis.com/auth/fitness.nutrition.write",
      // "https://www.googleapis.com/auth/fitness.oxygen_saturation.read",
      // "https://www.googleapis.com/auth/fitness.oxygen_saturation.write",
      // "https://www.googleapis.com/auth/fitness.reproductive_health.read",
      // "https://www.googleapis.com/auth/fitness.reproductive_health.write",
      // "https://www.googleapis.com/auth/fitness.sleep.read",
      // "https://www.googleapis.com/auth/fitness.sleep.write",
    ],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      setAuthData(authentication);
      console.log(authentication);
      setToken(authentication.accessToken);
      // getGoogleUser(authentication.accessToken);
      setGoogleToken(authentication.accessToken);
      deviceStorage.saveItem("googleToken", authentication.accessToken);
    }
  }, [response]);

  useEffect(() => {
    if (googleToken) {
      getSteps();
    }
  }, [googleToken]);

  useEffect(() => {
    deviceStorage
      .loadItem("googleToken")
      .then((response) => (response ? setGoogleToken(response) : null))
      .catch((error) => console.log(error));
  }, []);

  // useEffect(()=>{
  //   setInterval(() => handleTime(), 5000);
  // },[])

  const getMidnight = () => {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  };

  const [time, setTime] = useState(Date.now());
  const [todayMidnight, setTodayMidnight] = useState(getMidnight());

  const handleTimeMidnight = () => {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    setTodayMidnight(d.getTime());
  };

  const handleTimeNow = () => {
    setTime(Date.now());
  };

  const handleTime = () => {
    handleTimeMidnight();
    handleTimeNow();
  };

  const stepRequest = {
    aggregateBy: [
      {
        dataTypeName: "com.google.step_count.delta",
        dataSourceId:
          "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
      },
    ],
    bucketByTime: { durationMillis: time - todayMidnight },
    startTimeMillis: todayMidnight,
    endTimeMillis: time,
  };

  const headerRequest = {
    headers: {
      Authorization: `Bearer ${googleToken}`,
    },
  };

  const calculateSteps = (data) => {
    let totalSteps = 0;
    data.bucket.forEach((bckt) => {
      bckt.dataset.forEach((datas) => {
        datas.point.forEach((pnt) => {
          pnt.value.forEach((val) => {
            totalSteps += val.intVal;
          });
        });
      });
    });
    return totalSteps;
  };

  // testId : 102220722962991557000
  const getSteps = () => {
    try {
      axios
        .post(
          "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
          stepRequest,
          headerRequest
        )
        .then((response) => {
          const data = response.data;
          const totalSteps = calculateSteps(data);
          setData(totalSteps);
        })
        .catch((error) => {
          console.log("GoogleUserReq error: ", error);
          setReqError(error);
        });
    } catch (error) {
      console.log("GoogleUserReq error: ", error);
      setReqError(error);
    }
  };

  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        Signed user
      </Text>

      <ScrollView style={{ height: 200 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>{data}</Text>
      </ScrollView>
      <Text style={{ fontWeight: "bold", fontSize: 30 }}>
        TimeMillis : {time}
      </Text>
      <Button
        disabled={!request}
        title="Sign in"
        onPress={() => promptAsync()}
      />

      <Button title="GET STEPS!" onPress={() => getSteps()} />
      <Button title="GET TIME" onPress={handleTime} />

      <StatusBar style="auto" />
    </View>
  );
}

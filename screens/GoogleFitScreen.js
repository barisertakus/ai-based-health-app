import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import * as Google from "expo-auth-session/providers/google";
import deviceStorage from "../utils/deviceStorage";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Button, Input } from "react-native-elements";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function GoogleFitScreen({ navigation }) {
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

  const [reqError, setReqError] = useState("");
  const [authData, setAuthData] = useState({});
  const [token, setToken] = useState("");
  const [data, setData] = useState(0);
  const [googleToken, setGoogleToken] = useState("");
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("Merhaba");
  const [body, setBody] = useState("Adım sayım ");
  const [emoji, setEmoji] = useState("");
  const [sendTo, setSendTo] = useState("");
  // const [title, setTitle] = useState("");
  // const [title, setTitle] = useState("");

  const [users, setUsers] = useState([]);
  const [googleUser, setGoogleUser] = useState({});

  const handleSetSendUser = (user) => {
    setSendTo(user.expoNotificationToken);
  };

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // useEffect(() => {
  //   if (googleUser && expoPushToken){
  //     console.log(googleUser.id)
  //     console.log(expoPushToken)
  //     axios
  //     .post("http://192.168.1.100:8080/api/googleUser/updateTokenById?id=" +
  //         googleUser.id +
  //         "&token=" +
  //         expoPushToken
  //     )
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  //   }

  // }, [googleUser, expoPushToken]);

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
      getGoogleUser();
    }
  }, [googleToken]);

  useEffect(() => {
    deviceStorage
      .loadItem("googleToken")
      .then((response) => (response ? setGoogleToken(response) : null))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getSteps();
  }, [navigation]);

  const getGoogleUser = () => {
    axios
      .get("https://www.googleapis.com/oauth2/v2/userinfo", headerRequest)
      .then((response) => setGoogleUser(response.data))
      .catch((error) => console.log(error));
  };

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
    setLoading(true);
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
          setLoading(false);
        })
        .catch((error) => {
          console.log("GoogleUserReq error: ", error);
          setReqError(error);
          setLoading(false);
        });
    } catch (error) {
      console.log("GoogleUserReq error: ", error);
      setReqError(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://192.168.1.100:8080/api/googleUser/getAll")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          {loading ? "Loading..." : data}
        </Text>
      </View>
      <Input placeholder="Title" value={title} disabled />
      <Input
        placeholder="Adım Sayım"
        value={body + data + " " + emoji}
        disabled
        disabledInputStyle={{ color: "black" }}
      />
      <ScrollView horizontal>
        {["🤣", "👍", "😭", "🙏", "😘", "🥰", "😍", "😊"].map((emoji,i) => {
          return (
            <TouchableOpacity
              style={{ margin: 5, marginHorizontal: 10 }}
              onPress={() => setEmoji(emoji)}
              key={i}
            >
              <Text style={{ fontSize: 30 }}>{emoji}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          title="Send Message"
          buttonStyle={{
            backgroundColor: "rgba(78, 116, 289, 1)",
            borderRadius: 10,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() =>
            sendPushNotification(sendTo, title, body + data + " " + emoji)
          }
        />
      </View>

      <ScrollView style={{ height: 200 }}>
        {users.map((user, i) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => handleSetSendUser(user)}
              key={i}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "white",
                  margin: 5,
                  marginVertical: 10,
                }}
              >
                {user.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* <Text style={{ fontWeight: "bold", fontSize: 30 }}>
        TimeMillis : {time}
      </Text> */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          disabled={!request}
          title="Google Sign In"
          onPress={() => promptAsync()}
          buttonStyle={{
            borderRadius: 10,
          }}
          containerStyle={{
            width: "100%",
            marginHorizontal: 50,
            marginVertical: 10,
            paddingHorizontal: 20,
          }}
        />

        <Button
          title="Refresh Steps!"
          onPress={() => getSteps()}
          buttonStyle={{
            borderRadius: 10,
          }}
          containerStyle={{
            width: "100%",
            marginHorizontal: 50,
            marginVertical: 10,
            paddingHorizontal: 20,
          }}
        />
      </View>
      {/* <Button title="GET TIME" onPress={handleTime} style={{margin:10}} /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

async function sendPushNotification(expoPushToken, title, body) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: title,
    body: body,
    data: { someData: "goes here" },
  };
  //😖
  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

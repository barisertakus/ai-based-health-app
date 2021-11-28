import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Profile from "./screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import HeartRate from "./screens/HeartRate";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <Tab.Navigator
        initialRouteName="heartrate"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#2D14C4",
            marginBottom: 45,
            marginHorizontal: "3%",
            overflow: "hidden",
            borderRadius: 50,
            height: 80,
            paddingBottom: 0,
            borderTopWidth: 0
          },
        }}
      >
        <Tab.Screen
          name="heartrate"
          component={HeartRate}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart-pulse" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="screen2"
          component={HeartRate}
          options={{
            tabBarLabel: "screen2",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="poll" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={HeartRate}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="compass" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavigation;

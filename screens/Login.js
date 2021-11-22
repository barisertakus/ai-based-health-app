import React, { useLayoutEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Icon, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "react-native-vector-icons";
// import loginBackground from "../assets/images/login-background.png"

// const loginBackgroundUri = Image.resolveAssetSource(loginBackground).uri;
const image = require("./login-background.png");
// console.log(loginBackground)

const Login = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.screenContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.smallContainer}>
          <Text style={styles.header}>Giriş</Text>
          <View style={styles.inputs}>
            <Input
              placeholder="Email"
              leftIcon={<Icon name="email" size={24} color="#2F80ED" />}
            />
            <Input
              placeholder="Şifre"
              secureTextEntry
              leftIcon={<Icon name="lock" size={24} color="#2F80ED" />}
            />
            <TouchableOpacity>
              <Text style={styles.textPassword}>Şifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
          {/* 
          <View>
            <FontAwesome name="facebook-square" size={24} />
            <FontAwesome name="google" size={24} />
          </View> */}
        </View>
        <View style={styles.footer}>
          <View style={styles.register}>
            <Text style={styles.registerText}>Yeni misiniz? Kaydolun</Text>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Giriş</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  smallContainer: {
    flex: 0.85,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
  },
  header: {
    paddingLeft: 20,
    fontSize: 35,
    fontWeight: "600",
    color: "#2F80ED",
  },
  inputs: {
    marginTop: 25,
    padding: 15,
  },
  textPassword: {
    color: "#2F80ED",
    alignSelf: "flex-end",
    paddingRight: 10,
    fontWeight: "bold",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingBottom: 25,
    paddingRight: 30,
  },
  register: {
    paddingTop: 50
  },
  registerText: {
    color: "white",
    fontSize: 17,
  },
  loginBtn: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    width: 160,
    height: 65,
    justifyContent: "center"
  },
  loginText: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
  },
});

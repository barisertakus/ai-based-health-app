import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Icon, Input } from "react-native-elements";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "react-native-vector-icons";
import deviceStorage from "../utils/deviceStorage";

const image = require("../assets/images/login-background.png");

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    axios
      .post("http://localhost:8080/api/auth/signup", { name,email,username, password })
      .then((response) => {
        alert("Kayıt Başarılı!")
        navigation.goBack();
      })
      .catch((error) => console.log(error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.screenContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.smallContainer}>
          <Text style={styles.header}>Kayıt Ol</Text>
          <View style={styles.inputs}>
            <Input
              value={name}
              onChangeText={setName}
              placeholder="Tam adınız"
              leftIcon={
                <Icon name="account-circle" size={24} color="#2F80ED" />
              }
            />
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              leftIcon={<Icon name="email" size={24} color="#2F80ED" />}
              autoCapitalize="none"
            />
            <Input
              value={username}
              onChangeText={setUsername}
              placeholder="Kullanıcı Adı"
              leftIcon={<Icon name="person" size={24} color="#2F80ED" />}
              autoCapitalize="none"
            />
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder="Şifre"
              secureTextEntry
              leftIcon={<Icon name="lock" size={24} color="#2F80ED" />}
              autoCapitalize="none"
            />
          </View>
          {/* 
          <View>
            <FontAwesome name="facebook-square" size={24} />
            <FontAwesome name="google" size={24} />
          </View> */}
        </View>
        <View style={styles.footer}>
          <View style={styles.register}>
            <Text style={styles.registerText}>Üye misiniz?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.registerTextBold}> Giriş</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={signup}>
            <Text style={styles.loginText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  smallContainer: {
    paddingTop: "70%",
    flex: 1,
    justifyContent: "center",
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
    marginTop: 10,
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
    paddingBottom: 20,
    paddingRight: 20,
  },
  register: {
    paddingTop: 50,
    flexDirection: "row",
  },
  registerText: {
    color: "white",
    fontSize: 17,
  },
  registerTextBold: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  loginBtn: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 10,
    width: ScreenWidth * 0.35,
    height: 65,
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
  },
});

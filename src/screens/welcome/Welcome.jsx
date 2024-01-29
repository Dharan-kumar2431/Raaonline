import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./Welcome.module";
import { StatusBar } from "expo-status-bar";
import { useFormik } from "formik";
// import DeviceInfo from 'react-native-device-info';
// import Constants from 'expo-constants';
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import axios from "axios";

const handleLoginValidation = (values, setIsFormValid) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "First Name is required";
  }

  if (!values.password) {
    errors.password = "Last Name is required";
  }

  const isValid = Object.keys(errors).length === 0;
  setIsFormValid(isValid);

  return errors;
};

const Welcome = ({ navigation }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterationPress = () => {
    navigation.navigate("Registeration");
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const combainAdditionalDetails = {
          ...values,
          request_from: "mobile",
          device_token: expoPushToken,
          device_os: Device.osName,
          device_name: Device.modelName,
        };
        console.log(combainAdditionalDetails, "all details");

        const response = await axios.post(
          "http://3.20.9.90/api/users/login",
          combainAdditionalDetails
        );
        console.log(response.data, "login response");

        if(response.data.status === "success"){
          navigation.navigate("Home")
        }

      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      }
    },
    validate: (values) => handleLoginValidation(values, setIsFormValid),
  });
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to receive push notifications denied");
        return;
      }

      if (status === "granted") {
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log("Expo Push Token:", token);
        setExpoPushToken(token);
      }
    })();
  }, []);

  return (
    <View>
      <StatusBar />
      <ScrollView>
        <View style={styles.container}>
          <LinearGradient
            colors={["#040446", "#65B18C"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientSquare}
          >
            <LinearGradient
              colors={["#040446", "#4AA97A"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.innerSquare}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../../assets/raaonline.jpg")}
                  style={styles.logoImage}
                />
              </View>

              <Text style={styles.companyText}>Premier Medical</Text>
              <Text style={styles.subtitleText}>E-learning Platform</Text>
            </LinearGradient>
          </LinearGradient>

          <View style={styles.loginForm}>
            <Text style={styles.loginHeading}>Login Account</Text>

            <TextInput
              style={styles.input}
              placeholder="Mobile number/Email"
              placeholderTextColor="#262673"
              value={formik.values.userName}
              onChangeText={formik.handleChange("userName")}
              onBlur={formik.handleBlur("userName")}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={{ width: 250 }}
                placeholder="Password"
                placeholderTextColor="#262673"
                secureTextEntry={!showPassword}
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={handleTogglePassword}
              >
                <FontAwesome
                  name={showPassword ? "eye-slash" : "eye"}
                  size={20}
                  color="blue"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => alert("Forgot password")}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                isFormValid ? styles.activeButton : styles.inactiveButton,
              ]}
              onPress={formik.handleSubmit}
              disabled={!isFormValid}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleRegisterationPress()}
              style={styles.createAccountButton}
            >
              <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.orContainer}>
              <Text style={styles.orText}>or</Text>
            </View>

            <TouchableOpacity style={styles.googleButton}>
              <FontAwesome name="google" size={20} color="white" />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Welcome;

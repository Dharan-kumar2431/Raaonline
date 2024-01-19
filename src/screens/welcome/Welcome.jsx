import React, { useState } from "react";
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

const Welcome = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login button pressed");
    navigation.navigate("Home");
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterationPress = () => {
    navigation.navigate("Registeration");
  }

  const isLoginButtonActive = username.length > 0 && password.length > 0;

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
              value={username}
              onChangeText={(text) => setUsername(text)}
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={{ width: 250 }}
                placeholder="Password"
                placeholderTextColor="#262673"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
                rightContentContainerStyle={styles.eyeIconContainer}
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

            <TouchableOpacity onPress={() => console.log("Forgot Password?")}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                isLoginButtonActive
                  ? styles.activeButton
                  : styles.inactiveButton,
              ]}
              onPress={handleLogin}
              disabled={!isLoginButtonActive}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> handleRegisterationPress()} style={styles.createAccountButton}>
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

import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Registeration.module";
import { FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import axios from "axios";
import RNPickerSelect from 'react-native-picker-select';

const getCountryCode = (country) => {
  const currency =
    country.currencies &&
    country.currencies[Object.keys(country.currencies)[0]];
  return currency && currency[0] && currency[0].code ? currency[0].code : "";
};

const Registeration = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const goBack = () => {
    navigation.goBack();
  };

  const handleRegister = () => {
    console.log("Register button pressed");
    navigation.navigate("Welcome");
  };

  const isRegisterationButtonActive = false;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        console.log("Country Data:", response.data);
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <View>
      <LinearGradient
        colors={["#4F94CD", "#FFD700"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity
          onPress={goBack}
          style={{ flexDirection: "row", marginHorizontal: 30 }}
        >
          <FontAwesome name="angle-left" size={25} color="white" />
          <Text style={styles.goBack}>{"Create Account"}</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View>
        <Text style={styles.registerationheading}>
          Kindly fill the details to Register.
        </Text>

        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#262673"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#262673"
          />
          <TextInput
            style={styles.input}
            placeholder="Email ID"
            placeholderTextColor="#262673"
          />

          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#262673"
          />
        </View>

        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 50,
            paddingVertical: 30,
          }}
        >
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
            <Text style={styles.checkboxtext}>
              Does the above mobile number contain Whatsapp
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.button,
              isRegisterationButtonActive
                ? styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={handleRegister}
            disabled={!isRegisterationButtonActive}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>  
      </View>
    </View>
  );
};

export default Registeration;

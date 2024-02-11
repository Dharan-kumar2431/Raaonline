import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from "../../../store/userSlice";
import { useFormik } from "formik";

import styles from "./Choosepassword.module";
import Createaccountheader from "../header/CreatePageHeader";
import axios from "axios";
import { Color } from "../../../components/misc/Colors";

const validatePasswordDetails = (values, setIsFormValid) => {
    const errors = {};
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    if (!values.isChecked) {
      errors.isChecked = "You must agree to the Terms of Service and Privacy Policy";
    }
  
    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
  
    return errors;
  };  

const Choosepassword = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  console.log(userData, "userDetails")



  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlebackarrow = () => {
    navigation.goBack();
  };

//   const handleNextPress = () => {
//     navigation.navigate("Verifyotp");
//   };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      isChecked: false,
    },
    onSubmit: async(values) => {
      console.log(values, "passworddetails");
      const combinedData = {
        ...userData,
        ...values,
      };
      console.log(combinedData)
      dispatch(setUserData(combinedData))
      try {
        const response = await axios.post("http://3.20.9.90/api/users/register",{
            email: combinedData.email,
            first_name: combinedData.first_name,
            last_name: combinedData.last_name,
            password: combinedData.password,
            role: "user",
            country_code: combinedData.country_code,
            phone_number: combinedData.phone_number,
            education_start_year: combinedData.education_start_year,
            user_education_level_id: combinedData.selectedEducation
        })

        console.log(response.data,"user status response")
        if(response.data.status === "success"){
            alert("registeration successfully")
            // navigation.navigate("Verifyotp");

            try {
                const response = await axios.post("http://3.20.9.90/api/users/sendOtp",{
                    userName: combinedData.email,
                    otpVia:"email"
                })
                console.log(response.data,"otp status")
                if(response.data.status === "success"){
                    setTimeout(()=>{
                        navigation.navigate("Verifyotp",{modile: combinedData.phone_number,email: combinedData.email});
                    },500)
                }

            }catch(error){
                if (axios.isAxiosError(error)) {
                    console.error(error.response.data);
                    alert(error.response.data.message)
                  } else {
                    console.error(error);
                  }
            }
        }
      } catch(error) {
        console.error("Api error", error)
      }
    },
    validate: (values) => validatePasswordDetails(values, setIsFormValid),
  });

  return (
    <View style={{ flex: 1 }}>
      <Createaccountheader navigation={navigation} name={"Create Account"} />

      <View>
        <Text style={styles.registrationHeading}>Choose Your Password</Text>

        <View style={{ alignItems: "center" }}>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={Color.TEXTCOLOR}
              secureTextEntry={!showPassword}
              value={formik.values.password}
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
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
          {formik.touched.password && formik.errors.password && (
              <Text style={styles.errorText}>{formik.errors.password}</Text>
            )}
          <View style={[styles.passwordContainer, { marginVertical: 10 }]}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={Color.TEXTCOLOR}
              secureTextEntry={!showPassword}
              value={formik.values.confirmPassword}
              onChangeText={formik.handleChange("confirmPassword")}
              onBlur={formik.handleBlur("confirmPassword")}
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
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <Text style={styles.errorText}>{formik.errors.confirmPassword}</Text>
            )}
          <View style={styles.section}>
          <Checkbox
              style={styles.checkbox}
              value={formik.values && formik.values.isChecked}
              onValueChange={() =>
                formik.setFieldValue("isChecked", !formik.values.isChecked)
              }
              color={
                formik.values && formik.values.isChecked ? "#4630EB" : undefined
              }
            />
            <Text style={styles.checkboxText}>
              I agree to the
              <Text style={{ textDecorationLine: "underline" }}>
                Terms of Service
              </Text>{" "}
              &
              <Text style={{ textDecorationLine: "underline" }}>
                Privacy Policy
              </Text>
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.backarrow}>
              <TouchableOpacity>
                <AntDesign
                  name="arrowleft"
                  size={25}
                  color={Color.TEXTCOLOR}
                  onPress={handlebackarrow}
                />
              </TouchableOpacity>
            </View>
            <View style={{}}>
            <TouchableOpacity
                style={[
                  styles.button,
                  isFormValid ? styles.activeButton : styles.inactiveButton,
                ]}
                onPress={formik.handleSubmit}
                disabled={!isFormValid}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Choosepassword;

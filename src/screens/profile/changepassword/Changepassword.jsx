import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import Createaccountheader from "../../createaccount/header/CreatePageHeader";
import styles from "./Changepassword.module";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { Color } from "../../../components/misc/Colors";

const changePasswordValidation = (values) => {
  const errors = {};

  if (!values.currentPassword) {
    errors.currentPassword = "Required";
  }

  if (!values.newPassword) {
    errors.newPassword = "Required";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "Password must be at least 8 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.newPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};

const Changepassword = ({ navigation }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      const token = await AsyncStorage.getItem("token");
      console.log(values);
      try {
        const response = await axios.post(
          "http://3.20.9.90/api/users/changePassword",
          {
            currentPassword: values.currentPassword,
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);

        if (response.data.status === "success") {
          formik.resetForm();
          showMessage({
            message: response.data.message,
            type: "success",
          });
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          showMessage({
            message: error.response.data.message,
            type: "danger",
          });
        } else {
          console.error(error);
        }
      }
    },
    validate: changePasswordValidation,
  });

  return (
    <View style={styles.container}>
      <View>
        <Createaccountheader navigation={navigation} name={"Change Password"} />
      </View>

      <ScrollView>
        <View style={styles.changePasswordContainer}>
          <Text style={styles.headerText}>Change Password</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Current Password"
                secureTextEntry={!showCurrentPassword}
                onChangeText={formik.handleChange("currentPassword")}
                onBlur={formik.handleBlur("currentPassword")}
                value={formik.values.currentPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={toggleCurrentPasswordVisibility}
              >
                <MaterialIcons
                  name={showCurrentPassword ? "visibility-off" : "visibility"}
                  size={24}
                  color={Color.SECONDARYCOLOR}
                />
              </TouchableOpacity>
            </View>
            {formik.errors.currentPassword &&
              formik.touched.currentPassword && (
                <Text style={styles.errorText}>
                  {formik.errors.currentPassword}
                </Text>
              )}

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                secureTextEntry={!showNewPassword}
                onChangeText={formik.handleChange("newPassword")}
                onBlur={formik.handleBlur("newPassword")}
                value={formik.values.newPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={toggleNewPasswordVisibility}
              >
                <MaterialIcons
                  name={showNewPassword ? "visibility-off" : "visibility"}
                  size={24}
                  color={Color.SECONDARYCOLOR}
                />
              </TouchableOpacity>
            </View>
            {formik.errors.newPassword && formik.touched.newPassword && (
              <Text style={styles.errorText}>
                {formik.errors.newPassword}
              </Text>
            )}

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                onChangeText={formik.handleChange("confirmPassword")}
                onBlur={formik.handleBlur("confirmPassword")}
                value={formik.values.confirmPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={toggleConfirmPasswordVisibility}
              >
                <MaterialIcons
                  name={showConfirmPassword ? "visibility-off" : "visibility"}
                  size={24}
                  color={Color.SECONDARYCOLOR}
                />
              </TouchableOpacity>
            </View>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <Text style={styles.errorText}>
                  {formik.errors.confirmPassword}
                </Text>
              )}

            <TouchableOpacity
              onPress={formik.handleSubmit}
              style={[
                styles.submitButton,
                (!formik.isValid || !formik.dirty) && styles.disabledButton,
                { opacity: !formik.isValid || !formik.dirty ? 0.5 : 1 },
              ]}
              disabled={!formik.isValid || !formik.dirty}
            >
              <Text style={styles.submitButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Changepassword;

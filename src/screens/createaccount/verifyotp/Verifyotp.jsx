import React, { useState, useRef } from "react";
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Createaccountheader from "../header/CreatePageHeader";
import styles from "./Verifyotp.module";
import axios from "axios";
import { Color } from "../../../components/misc/Colors";
import { baseUrl } from "../../services/Services";

const Verifyotp = ({ navigation, route }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef(Array(4).fill(null).map(() => React.createRef()));
  const sendOtpTOMobile = route.params.modile
  const sendOtpTOEmail = route.params.email

  const maskedMobileNumber =
    sendOtpTOMobile.substring(0, sendOtpTOMobile.length / 3) +
    "xxxxx" +
    sendOtpTOMobile.substring(sendOtpTOMobile.length / 2 + 3);

  console.log(sendOtpTOMobile,"mobile number for otp")

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = async() => {
    const enteredOtp = otp.join("");
    console.log("Submitted OTP:", enteredOtp);

    try{
        const response = await axios.post(`${baseUrl}/api/users/verifyOtp`, {
            otp:enteredOtp,
            userName:sendOtpTOEmail,
            otp_for : "login",
        })

        console.log(response.data,"otp verified status")
        if(response.data.status === "success"){
            alert("OTP Verified Successfully")
            navigation.navigate("Welcome");
        }
    } catch(error) {
        if (axios.isAxiosError(error)) {
            console.error(error.response.data);
            alert(error.response.data.message)
          } else {
            console.error(error);
          }
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={{ flex: 1 }}>
        <Createaccountheader navigation={navigation} name={"OTP Verification"} />

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={styles.registrationHeading}>OTP Verification</Text>
          <Text style={styles.otpsubheading}>Please input the code you received via SMS at {maskedMobileNumber}.</Text>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  value={digit}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              ))}
            </View>

            <View style={{marginTop: 30}}>
                <Text>
                I didn't receive any code <Text style={{color:Color.SECONDARYCOLOR,fontWeight:"bold",textDecorationLine:"underline"}}>RESEND OTP</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={{ color: "white",width:200,textAlign:"center",paddingVertical:1 }}>Verify & Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Verifyotp;

import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./Registeration.module";
import { FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import down from "../../../assets/down.png";
import { useFormik } from "formik";
import Createaccountheader from "./header/CreatePageHeader";
import { setUserData } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Color } from "../../components/misc/Colors";
const { width, height } = Dimensions.get("window");

const validateRegistration = (values, setIsFormValid) => {
  const errors = {};

  if (!values.first_name) {
    errors.first_name = "First Name is required";
  }

  if (!values.last_name) {
    errors.last_name = "Last Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.phone_number) {
    errors.phone_number = "Phone Number is required";
  }

  const isValid = Object.keys(errors).length === 0;
  setIsFormValid(isValid);

  return errors;
};

const Registeration = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            item: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.name}`,
          };
        });

        setAreas(areaData);
        if (areaData.length > 0) {
          // console.log(areaData,"areadata")
          let defaultData = areaData.filter((a) => a.code == "IN");

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);

  function renderAreasCodesModal() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: 10,
            flexDirection: "row",
          }}
          onPress={() => {
            setSelectedArea(item), setModalVisible(false);
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{
              height: 30,
              width: 30,
              marginRight: 10,
            }}
          />

          <Text style={{ fontSize: 16, color: "black" }}>{item.item}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                height: 400,
                width: width * 0.8,
                color: "black",
                backgroundColor: "white",
                borderRadius: 12,
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                verticalScrollIndicator={false}
                style={{
                  padding: 20,
                  marginBottom: 20,
                  color: "black",
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
    enableReinitialize: true,
    validate: (values) => validateRegistration(values, setIsFormValid),
    onSubmit: async(values) => {
      const combinedValues = {
        ...values,
        country_code: selectedArea ? selectedArea.callingCode : null,
      };
      console.log(combinedValues, "formvalues");
      try{
        const params = {
          email: values.email,
          phone_number: values.phone_number
        }
        console.log('params',params)
        const response = await axios.post("http://3.20.9.90/api/users/checkUsername",params)

        console.log(response.data,"==> use check response")

        if(response.data.status === "success"){
          dispatch(setUserData(combinedValues));
          navigation.navigate("Educationaldetails");
        }
      } catch(error){
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message)
        } else {
          console.error(error);
        }
      }
    },
  });

  // console.log("Is Form Valid:", formik.isValid);

  return (
    <View>
      <Createaccountheader navigation={navigation} name={"Create Account"} />

      <View>
        <Text style={styles.registrationHeading}>
          Kindly fill the details to Register.
        </Text>

        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor={Color.TEXTCOLOR}
            onChangeText={formik.handleChange("first_name")}
            onBlur={formik.handleBlur("first_name")}
            value={formik.values.first_name}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor={Color.TEXTCOLOR}
            onChangeText={formik.handleChange("last_name")}
            onBlur={formik.handleBlur("last_name")}
            value={formik.values.last_name}
          />
          <TextInput
            style={[
              styles.input,
              {
                borderColor:
                  formik.touched.email && formik.errors.email
                    ? "red"
                    : Color.TEXTCOLOR,
              },
            ]}
            placeholder="Email ID"
            placeholderTextColor={Color.TEXTCOLOR}
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
           <View style={{alignItems:"flex-start"}}>
             <Text style={{ color: "red"}}>{formik.errors.email}</Text>
           </View>
          ) : null}
          <View
            style={{
              width: "80%",
              borderWidth: 1,
              borderRadius: 5,
              borderColor: Color.TEXTCOLOR,
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 50,
                  marginHorizontal: 5,
                  marginTop: 5,
                  flexDirection: "row",
                  fontSize: 12,
                }}
                onPress={() => setModalVisible(true)}
              >
                <View style={{ justifyContent: "center", marginLeft: 5 }}>
                  <Image
                    source={{ uri: selectedArea?.flag }}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>

                <View style={{ justifyContent: "center", marginLeft: 5 }}>
                  <Text style={{ color: Color.TEXTCOLOR, fontSize: 18 }}>
                    {selectedArea?.callingCode}
                  </Text>
                </View>

                <View style={{ justifyContent: "center", marginLeft: 15 }}>
                  <Image
                    source={down}
                    style={{ width: 10, height: 10, tintColor: Color.TEXTCOLOR}}
                  />
                </View>
              </TouchableOpacity>
              <TextInput
                style={{
                  flex: 1,
                  height: 40,
                  marginLeft: 5,
                  marginTop: 8,
                }}
                placeholder="Mobile Number"
                placeholderTextColor={Color.TEXTCOLOR}
                onChangeText={formik.handleChange("phone_number")}
                onBlur={formik.handleBlur("phone_number")}
                value={formik.values.phone_number}
              />
            </View>
          </View>
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
            <Text style={styles.checkboxText}>
              Does the above mobile number contain Whatsapp
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
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
      {renderAreasCodesModal()}
    </View>
  );
};

export default Registeration;

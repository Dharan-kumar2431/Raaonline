import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";
import styles from "./Educational_details.module";
import Createaccountheader from "../header/CreatePageHeader";
import YearPickerModal from "../yearmodelpicker/Yearmodelpicker";
import { currenteducation } from "../../../shared/datas";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, setUserData } from "../../../store/userSlice";
import { Color } from "../../../components/misc/Colors";

const validateEducationalDetails = (values, setIsFormValid) => {
  const errors = {};

  if (!values.selectedEducation) {
    errors.selectedEducation = "Select an education type";
  }

  if (!values.selectedCountry) {
    errors.selectedCountry = "Select a country";
  }

  if (!values.SelectedState) {
    errors.SelectedState = "Select a state";
  }

  if (!values.collegeName) {
    errors.collegeName = "College Name is required";
  }

  if (!values.education_start_year) {
    errors.education_start_year = "Select the start year";
  }

  if (!values.education_end_year) {
    errors.education_end_year = "Select the end year";
  }

  const isValid = Object.keys(errors).length === 0;
  setIsFormValid(isValid);

  return errors;
};

const Educationaldetails = ({ navigation, route }) => {
    const [selectedEducation, setSelectedEducation] = useState({
        id: null,
        label: "",
      });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [SelectedState, setSelectedState] = useState("");
  const [isStartYearPickerVisible, setIsStartYearPickerVisible] =
    useState(false);
  const [isEndYearPickerVisible, setIsEndYearPickerVisible] = useState(false);
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      selectedEducation: "",
      selectedCountry: "",
      SelectedState: "",
      education_start_year: null,
      education_end_year: null,
      collegeName: "",
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
      dispatch(setUserData({ ...userData, ...values }));
      navigation.navigate("Choosepassword");
    },
    validate: (values) => validateEducationalDetails(values, setIsFormValid),
  });

  useEffect(() => {
    console.log("selected items ****>>", route.params?.selecteditem?.name);
    console.log("selected items &&&&>>", route.params?.selectedstateitem?.name);
    if (route.params?.selecteditem?.name) {
      setSelectedCountry(route.params?.selecteditem?.name);
      formik.setFieldValue("selectedCountry", route.params?.selecteditem?.name);
    }
    if (route.params?.selectedstateitem?.name) {
      formik.setFieldValue(
        "SelectedState",
        route.params?.selectedstateitem?.name
      );
    }
  }, [route.params?.selecteditem?.name, route.params?.selectedstateitem?.name]);

  const showStartYearPicker = () => {
    setIsStartYearPickerVisible(true);
  };

  const showEndYearPicker = () => {
    setIsEndYearPickerVisible(true);
  };

  const dismissStartYearPicker = () => {
    setIsStartYearPickerVisible(false);
  };

  const dismissEndYearPicker = () => {
    setIsEndYearPickerVisible(false);
  };

  const selectStartYear = (year) => {
    setStartYear(year);
    dismissStartYearPicker();
  };

  const selectEndYear = (year) => {
    setEndYear(year);
    dismissEndYearPicker();
  };

  const handlebackarrow = () => {
    navigation.goBack();
  };

  const handleSelectCountriesState = (cat) => {
    if (cat === "state") {
      if (!formik.values.selectedCountry) {
        alert("Please select a country first.");
      } else {
        navigation.navigate("Searchcountriesandstate", {
          category: cat,
          selectedCountry: formik.values.selectedCountry,
        });
      }
    } else {
      navigation.navigate("Searchcountriesandstate", { category: cat });
    }
  };

  const handleNextPress = () => {
    formik.handleSubmit();
  };

  return (
    <View style={styles.container}>
      <Createaccountheader navigation={navigation} name={"Create Account"} />
      <View>
        <Text style={styles.registrationHeading}>Educational details</Text>

        <View style={{ alignItems: "center" }}>
          <View style={[styles.currenteduication]}>
            <Picker
              selectedValue={formik.values.selectedEducation}
              onValueChange={(itemValue, itemIndex) =>
                formik.setFieldValue("selectedEducation", itemValue)
              }
            >
              {currenteducation.map((education) => (
                <Picker.Item
                  key={education.id}
                  label={education.label}
                  value={education.id}
                  style={{ fontSize: 15, color: Color.TEXTCOLOR }}
                />
              ))}
            </Picker>
          </View>
          <TouchableOpacity
            onPress={() => handleSelectCountriesState("countries")}
          >
            <TextInput
              placeholder="Country"
              placeholderTextColor={Color.TEXTCOLOR}
              value={formik.values.selectedCountry}
              editable={false}
              style={styles.input}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectCountriesState("state")}>
            <TextInput
              placeholder="State"
              placeholderTextColor={Color.TEXTCOLOR}
              value={formik.values.SelectedState}
              editable={false}
              style={styles.input}
            />
          </TouchableOpacity>

          <TextInput
            placeholder="College Name"
            placeholderTextColor={Color.TEXTCOLOR}
            style={styles.input}
            value={formik.values.collegeName}
            onChangeText={(text) => formik.setFieldValue("collegeName", text)}
          />
        </View>
        <View>
          <Text style={styles.yearofadmin}>Year of Admission</Text>
          <View style={{ alignItems: "center" }}>
            <View style={styles.calender}>
              <TouchableOpacity onPress={showStartYearPicker}>
                <TextInput
                  placeholder="Start"
                  value={
                    formik.values.education_start_year
                      ? formik.values.education_start_year.toString()
                      : ""
                  }
                  style={{ width: 115 }}
                  editable={false}
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 20 }}>&#x21c0;</Text>
              <TouchableOpacity onPress={showEndYearPicker}>
                <TextInput
                  placeholder="End"
                  value={
                    formik.values.education_end_year
                      ? formik.values.education_end_year.toString()
                      : ""
                  }
                  style={{ width: 115, paddingLeft: 60 }}
                  editable={false}
                />
              </TouchableOpacity>
              <FontAwesome
                name="calendar"
                size={15}
                style={{ paddingTop: 5 }}
                color="blue"
              />
            </View>
          </View>
          <YearPickerModal
            visible={isStartYearPickerVisible}
            onDismiss={dismissStartYearPicker}
            onSelectYear={(year) =>
              formik.setFieldValue("education_start_year", year)
            }
            name="Start"
          />

          <YearPickerModal
            visible={isEndYearPickerVisible}
            onDismiss={dismissEndYearPicker}
            onSelectYear={(year) =>
              formik.setFieldValue("education_end_year", year)
            }
            name="End"
          />

          <View style={{ flexDirection: "row", margin: 20, marginLeft: 45 }}>
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
                onPress={handleNextPress}
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

export default Educationaldetails;

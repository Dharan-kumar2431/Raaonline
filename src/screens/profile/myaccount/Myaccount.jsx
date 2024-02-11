import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Createaccountheader from "../../createaccount/header/CreatePageHeader";
import { Dropdown } from "react-native-element-dropdown";
import { useFormik } from "formik";
import styles from "./Myaccount.module";
import DropdownComponent from "./droupdown/Droupdown";
import axios from "axios";

const Myaccount = ({ navigation, route }) => {
  const { userDetails } = route.params;

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(userDetails.country_name || "");
  const [selectedState, setSelectedState] = useState(userDetails.state || "");

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((response) => {
        const { data } = response.data;
        console.log(data, "counteries list");
        setCountries(
          data.map((country) => ({ label: country.name, value: country.name }))
        );
      })
      .catch((error) =>
        console.error("Error fetching countries and states:", error)
      );
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/states", {
          country: selectedCountry,
        })
        .then((response) => {
          const { data } = response.data;
          const { states } = data;
          console.log(states, "states list");
          setStates(
            states.map((state) => ({ label: state.name, value: state.name }))
          );
        })
        .catch((error) => console.error("Error fetching states:", error));
    }
  }, [selectedCountry]);

  const formik = useFormik({
    initialValues: {
      firstName: userDetails.first_name,
      lastName: userDetails.last_name,
      phoneNumber: userDetails.phone_number.toString(),
      email: userDetails.email,
    },
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Createaccountheader
          navigation={navigation}
          name={"Personal Information"}
        />
      </View>

      <ScrollView>
      <View style={styles.personalDetailsContainer}>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>
            Personal Details
          </Text>
          <View style={styles.personaldetailsNames}>
            <TextInput
              style={[styles.inputs, { flex: 1, marginRight: 5 }]}
              placeholder="Dr."
            />
            <TextInput
              style={[styles.inputs, { flex: 2, marginRight: 5 }]}
              placeholder="First Name"
              onChangeText={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
              value={formik.values.firstName}
            />
            <TextInput
              style={[styles.inputs, { flex: 2 }]}
              placeholder="Last Name"
              onChangeText={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
              value={formik.values.lastName}
            />
          </View>
          <TextInput
            style={[styles.fulllengthInputs, styles.inputs]}
            placeholder="Phone Number"
            onChangeText={formik.handleChange("phoneNumber")}
            onBlur={formik.handleBlur("phoneNumber")}
            value={formik.values.phoneNumber}
            editable={false}
          />
          <TextInput
            style={[styles.fulllengthInputs, styles.inputs]}
            placeholder="Email"
            onChangeText={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            value={formik.values.email}
            editable={false}
          />
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <View style={{ flex: 1, marginRight: 5 }}>
              <DropdownComponent
                data={countries}
                value={selectedCountry}
                onChange={(country) => setSelectedCountry(country)}
                placeholder="Select Country"
              />
            </View>
            <View style={{ flex: 1 }}>
              <DropdownComponent
                data={states}
                value={selectedState}
                onChange={(state) => setSelectedState(state)}
                placeholder="Select State"
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.cancelbtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={{color:"#0468CC",fontWeight:"500"}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.savebtn, { backgroundColor: formik.dirty ? "#9dd7ef" : "lightgray" }]}
            onPress={formik.handleSubmit}
            disabled={!formik.dirty}
          >
            <Text style={{color:"white",fontWeight:"500"}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Myaccount;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from "react-native-element-dropdown";
import styles from "./Courses.module";
import Createaccountheader from "../createaccount/header/CreatePageHeader";
import Footer from "../footer/Footer";

const CourseDetails = ({ navigation, route }) => {
  const [subCoursesDetails, setSubCoursesDetails] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isContinueEnabled, setIsContinueEnabled] = useState(false); // Track if Continue button should be enabled

  const courseHeading = route.params.courseName;
  const courseid = route.params.courseId;

  useEffect(() => {
    const fetchCourses = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("working", token);
      try {
        const response = await axios.get("http://3.20.9.90/api/subCategories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.data, "subcourses details");
        setSubCoursesDetails(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      }
    };

    fetchCourses();
  }, []);

  const openModal = (course) => {
    setSelectedCourse(course);
    setSelectedPlan(null);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedCourse(null);
    setSelectedPlan(null);
    setIsContinueEnabled(false);
  };

  const selectPlan = (planId) => {
    setSelectedPlan((prevPlanId) => {
      return prevPlanId === planId ? prevPlanId : planId;
    });
    setIsContinueEnabled(true);
  };

  const handleContinue = async () => {
    const token = await AsyncStorage.getItem("token");
    if (selectedPlan) {
      const selectedPrice = subCoursesDetails
        .flatMap((course) => course.sub_category_prices)
        .find((price) => price.id === selectedPlan);

      if (selectedPrice) {
        console.log("Selected Plan Prices:", selectedPrice);

        try {
          const response = await axios.post(
            "http://3.20.9.90/api/carts",
            {
              sub_category_id: 13, 
              sub_category_price_id: 506, 
              is_book_purchased: 0
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error(error.response.data);
            alert(error.response.data.message);
          } else {
            console.error(error);
          }
        }

        setIsModalVisible(false);
        navigation.navigate("Cart", { SelectedPrice: selectedPrice });
      } else {
        console.error("Selected plan not found!");
      }
    } else {
      console.error("No plan selected!");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Createaccountheader navigation={navigation} name={"Go Back"} />
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.heading}>{courseHeading}</Text>

        <View style={styles.cardRow}>
          {subCoursesDetails.map((course) => (
            <View key={course.id} style={styles.card}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <Image
                    source={{ uri: course.image }}
                    style={styles.cardImage}
                  />
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                  <FontAwesome name="heart-o" size={20} color="white" />
                </View>
                <View style={styles.iconArrowContainer}>
                  <FontAwesome
                    style={{}}
                    name="angle-double-right"
                    size={30}
                    color="white"
                  />
                </View>
              </View>

              <View style={{ flex: 2 }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{course.name}</Text>
                </View>
                <View style={styles.dropdownWrapper}>
                  <Dropdown
                    style={{ backgroundColor: "#E7F6FF", paddingLeft: 5 }}
                    placeholder="Course Details"
                    placeholderStyle={{ color: "#00468D", fontSize: 14 }}
                    data={course.features
                      .split("\r\n")
                      .map((feature, index) => ({
                        label: feature,
                        value: index.toString(),
                        disable: true,
                      }))}
                    labelField="label"
                    value="Course Details"
                    containerStyle={{
                      backgroundColor: "#00468D",
                      borderRadius: 10,
                    }}
                    itemTextStyle={{
                      fontSize: 12,
                      color: "white",
                      marginBottom: -18,
                      marginTop: -45,
                      paddingTop: 30,
                    }}
                  />
                </View>

                <Text style={styles.actualprice}>
                  Rs.{" "}
                  <Text style={{ textDecorationLine: "line-through" }}>
                    {parseInt(course.sub_category_prices[0].actual_price)}
                  </Text>
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.price}>
                    Rs. {parseInt(course.sub_category_prices[0].offer_price)}
                  </Text>

                  <Text style={styles.offerPercentage}>
                    {parseInt(
                      (course.sub_category_prices[0].offer_price /
                        course.sub_category_prices[0].actual_price) *
                        100
                    )}
                    % Off
                  </Text>
                </View>

                <View style={styles.buttonRow}>
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => openModal(course)}
                  >
                    <Text style={styles.buttonText}>Add to Cart</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.featuresButton}>
                    <Text style={styles.featurebuttonText}>Features</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View>
        <Footer />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <FontAwesome name="times-circle" size={30} color="black" />
            </TouchableOpacity>
            {selectedCourse && (
              <>
                <Text style={styles.modalText}>{selectedCourse.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "lightgray" }}
                  />
                  <View>
                    <Text
                      style={{
                        width: 130,
                        textAlign: "center",
                        color: "#00468D",
                      }}
                    >
                      Subscription Plans
                    </Text>
                  </View>
                  <View
                    style={{ flex: 1, height: 1, backgroundColor: "lightgray" }}
                  />
                </View>
                {selectedCourse.sub_category_prices
                  .sort((a, b) => {
                    const planOrder = [
                      "Basic Plan",
                      "Advanced Plan",
                      "Pro Plan",
                    ];
                    return (
                      planOrder.indexOf(a.sub_title) -
                      planOrder.indexOf(b.sub_title)
                    );
                  })
                  .map((price, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[styles.checkboxButton]}
                      onPress={() => selectPlan(price.id)}
                    >
                      <View style={styles.checkboxs}>
                        <FontAwesome
                          name={
                            selectedPlan === price.id
                              ? "check-square-o"
                              : "square-o"
                          }
                          size={20}
                          color="black"
                        />
                      </View>
                      <View style={styles.checkboxLabel}>
                        <View>
                          <Text style={styles.subCategoryTitle}>
                            {price.sub_title}
                          </Text>
                        </View>
                        <View>
                          <Text style={styles.subdescription}>
                            {price.sub_description}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <View>
                            <View style={styles.crossline} />
                            <Text style={styles.modelprice}>
                              Rs. {price.actual_price}
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.modelofferprice}>
                              Rs. {price.offer_price}
                            </Text>
                          </View>
                        </View>
                        <View style={{ marginLeft: 100 }}>
                          <Text style={styles.duration}>
                            {price.price_duration.duration} Validity
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
              </>
            )}
            <TouchableOpacity
              style={[
                styles.continueButton,
                { opacity: isContinueEnabled ? 1 : 0.3 },
              ]}
              onPress={handleContinue}
              disabled={!isContinueEnabled}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CourseDetails;

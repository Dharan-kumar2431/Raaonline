import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Modal,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from "react-native-element-dropdown";
import styles from "./Courses.module";
import Createaccountheader from "../createaccount/header/CreatePageHeader";
import Footer from "../footer/Footer";
import DataLoader from "../loaders/dataloader/Dataloader";
import { Color } from "../../components/misc/Colors";
import SearchBarComponent from "../searchbar/Searchbar";
import { baseUrl } from "../services/Services";

const CourseDetails = ({ navigation, route }) => {
  const [subCoursesDetails, setSubCoursesDetails] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isContinueEnabled, setIsContinueEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const courseHeading = route.params.courseName;
  const courseid = route.params.courseId;

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log("working", token);
    try {
      const response = await axios.get(
        `${baseUrl}/api/subCategories?filterKey=category_id&filterValue=${courseid}&status=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data, "subcourses details");
      setSubCoursesDetails(response.data.data);
      setFilteredCourses(response.data.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
        alert(error.response.data.message);
      } else {
        console.error(error);
      }
    }
  };

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
        console.log("selected price id", selectedPrice.id);

        try {
          const response = await axios.post(
            `${baseUrl}/api/carts`,
            {
              sub_category_id: selectedPrice.sub_category_id,
              sub_category_price_id: selectedPrice.id,
              is_book_purchased: 0,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
          if (response.data.status === "success") {
            showToast("Item added to cart successfully");
            setIsContinueEnabled(false);
            navigation.navigate("Cart");
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.error(error.response.data);
            alert(error.response.data.message);
            setIsContinueEnabled(false);
          } else {
            console.error(error);
          }
        }

        setIsModalVisible(false);
      } else {
        console.error("Selected plan not found!");
      }
    } else {
      console.error("No plan selected!");
    }
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleCoursePress = (name, id) => {
    navigation.navigate("Subcourses", { courseName: name, courseId: id });
  };

  const handleSearch = (searchText) => {
    const filtered = subCoursesDetails.filter((course) =>
      course.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleFeaturespress = (couesesDetails) => {
    console.log(couesesDetails, "$$$Details");
    navigation.navigate("Features", { data: couesesDetails });
  };

  const handleFavoritepress = async (coursesdeatils) => {
    const token = await AsyncStorage.getItem("token");
    console.log(coursesdeatils, "fav courses details");
    console.log(coursesdeatils.is_in_favorite, "fav courses details");
    console.log(
      coursesdeatils.sub_category_prices[0].sub_category_id,
      "id===>>>>"
    );
    const id = coursesdeatils.sub_category_prices[0].sub_category_id;

    try {
      if (coursesdeatils.is_in_favorite) {
        const response = await axios.delete(
          `${baseUrl}/api/favorites/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        fetchCourses()
      } else {
        const response = await axios.post(
          `${baseUrl}/api/favorites`,
          {
            sub_category_id: id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        fetchCourses()
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
        alert(error.response.data.message);
        setIsContinueEnabled(false);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Createaccountheader navigation={navigation} name={"Go Back"} />
        <View style={styles.searchbar}>
          <SearchBarComponent onSearch={handleSearch} />
        </View>
      </View>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <DataLoader />
        </View>
      ) : (
        <ScrollView style={styles.content}>
          <Text style={styles.heading}>{courseHeading}</Text>

          <View style={styles.cardRow}>
            {filteredCourses.map((course) => (
              <View key={course.id} style={styles.card}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    onPress={() => handleCoursePress(course.name, course.id)}
                  >
                    <Image
                      source={{ uri: course.image }}
                      style={styles.cardImage}
                    />
                  </TouchableOpacity>
                  <View style={styles.iconContainer}>
                    <TouchableOpacity
                      onPress={() => handleFavoritepress(course)}
                    >
                      <FontAwesome
                        name={course.is_in_favorite ? "heart" : "heart-o"}
                        size={20}
                        color={course.is_in_favorite ? "red" : "white"}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.iconArrowContainer}>
                    <TouchableOpacity
                      onPress={() => handleCoursePress(course.name, course.id)}
                    >
                      <FontAwesome
                        style={{}}
                        name="angle-double-right"
                        size={30}
                        color="white"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ flex: 2 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.cardTitle}>{course.name}</Text>
                  </View>
                  <View style={styles.dropdownWrapper}>
                    {/* <Dropdown
                      style={{ backgroundColor: "#E7F6FF", paddingLeft: 5 }}
                      placeholder="Course Details"
                      placeholderStyle={{
                        color: Color.SECONDARYCOLOR,
                        fontSize: 14,
                      }}
                      data={course?.features
                        .split("\r\n")
                        .map((feature, index) => ({
                          label: feature,
                          value: index.toString(),
                          disable: true,
                        }))}
                      labelField="label"
                      value="Course Details"
                      containerStyle={{
                        backgroundColor: Color.SECONDARYCOLOR,
                        borderRadius: 10,
                      }}
                      itemTextStyle={{
                        fontSize: 12,
                        color: "white",
                        marginBottom: -18,
                        marginTop: -45,
                        paddingTop: 30,
                      }}
                    /> */}
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

                    <TouchableOpacity
                      style={styles.featuresButton}
                      onPress={() => handleFeaturespress(course)}
                    >
                      <Text style={styles.featurebuttonText}>Features</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
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
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "lightgray",
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        width: 130,
                        textAlign: "center",
                        color: Color.SECONDARYCOLOR,
                      }}
                    >
                      Subscription Plans
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "lightgray",
                    }}
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

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Subcourses.module";
import Createaccountheader from "../createaccount/header/CreatePageHeader";
import DataLoader from "../loaders/dataloader/Dataloader";
import SearchBarComponent from "../searchbar/Searchbar";
import { baseUrl } from "../services/Services";

const Subcourses = ({ navigation, route }) => {
  const [subCourses, setSubCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const courseHeading = route.params.courseName;
  const courseid = route.params.courseId;

  useEffect(() => {
    const fetchCourses = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          `${baseUrl}/api/courses?filterKey=sub_category&filterValue=${courseid}&status=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data, "=====> subcoursesdetails");
        setSubCourses(response.data.data);
        setFilteredCourses(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchCourses();
  }, []);

  const handleCoursePress = (introVideoUrl, courseId,coursesDeatils) => {
    console.log(introVideoUrl, courseId, "====>url");
    navigation.navigate("Videolectures", {
      url: introVideoUrl,
      courseId: courseId,
      coursesData: coursesDeatils
    });
  };

  const handleSearch = (searchText) => {
    console.log("Searching for:", searchText);
    const filtered = subCourses.filter((course) =>
      course.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleAddToCart = async (course) => {
    const token = await AsyncStorage.getItem("token");

    console.log(course.course_prices, "courses details");

    try {
      const response = await axios.post(
        `${baseUrl}/api/carts`,
        {
          course_id: course.course_prices[0].course_id,
          course_price_id: course.course_prices[0].id,
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
  };

  const handleFeatures = (couesesDetails) => {
    console.log(couesesDetails,"$$$Details")
    navigation.navigate("Features",{data: couesesDetails})
  }

  return (
    <View style={styles.container}>
      <View>
        <Createaccountheader navigation={navigation} name={"Go Back"} />
        <View style={styles.searchbar}>
          <SearchBarComponent onSearch={handleSearch} />
        </View>
      </View>
      {loading ? (
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
                    onPress={() =>
                      handleCoursePress(
                        course.course_intro_video,
                        course.sub_categories[0].course_sub_categories.course_id,
                        course,
                      )
                    }
                  >
                    <Image
                      source={{ uri: course.image }}
                      style={styles.cardImage}
                    />
                  </TouchableOpacity>
                  <View style={styles.iconArrowContainer}>
                    <TouchableOpacity onPress={() => handleCoursePress(
                        course.course_intro_video,
                        course.sub_categories[0].course_sub_categories.course_id,
                        course,
                      )}>
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

                  <Text style={styles.actualprice}>
                    Rs.{" "}
                    <Text style={{ textDecorationLine: "line-through" }}>
                      {parseInt(course.course_prices[0].actual_price)}
                    </Text>
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.price}>
                      Rs. {parseInt(course.course_prices[0].offer_price)}
                    </Text>

                    <Text style={styles.offerPercentage}>
                      {parseInt(
                        (course.course_prices[0].offer_price /
                          course.course_prices[0].actual_price) *
                          100
                      )}
                      % Off
                    </Text>
                  </View>

                  <View style={styles.buttonRow}>
                    <TouchableOpacity
                      onPress={() => handleAddToCart(course)}
                      style={[styles.addToCartButton, { flex: 1 }]}
                    >
                      <FontAwesome
                        name="shopping-cart"
                        size={20}
                        color="white"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleFeatures(course) }
                      style={[styles.featuresButton, { flex: 4 }]}
                    >
                      <Text style={styles.featurebuttonText}>
                        Course Features
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Subcourses;

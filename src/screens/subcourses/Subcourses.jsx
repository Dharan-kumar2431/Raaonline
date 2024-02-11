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

const Subcourses = ({ navigation, route }) => {
  const [subCourses, setSubCourses] = useState([]);
  const [loading, setLoading] = useState(true); 

  const courseHeading = route.params.courseName;
  const courseid = route.params.courseId;

  useEffect(() => {
    const fetchCourses = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://3.20.9.90/api/courses?filterKey=sub_category&filterValue=${courseid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSubCourses(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      } finally {
        setTimeout(()=>{
          setLoading(false);
         }, 1000)
      }
    };

    fetchCourses();
  }, []);

  const handleCoursePress = () => {
    navigation.navigate("Videolectures")
  };

  return (
    <View style={styles.container}>
      <View>
        <Createaccountheader navigation={navigation} name={"Go Back"} />
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <DataLoader/>
        </View>
      ) : (
        <ScrollView style={styles.content}>
          <Text style={styles.heading}>{courseHeading}</Text>

          <View style={styles.cardRow}>
            {subCourses.map((course) => (
              <View key={course.id} style={styles.card}>
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={() => handleCoursePress()}>
                    <Image
                      source={{ uri: course.image }}
                      style={styles.cardImage}
                    />
                  </TouchableOpacity>
                  <View style={styles.iconArrowContainer}>
                    <TouchableOpacity onPress={() => handleCoursePress()}>
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
                    <TouchableOpacity style={[styles.addToCartButton, {flex:1}]}>
                      <FontAwesome name="shopping-cart" size={20} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.featuresButton,{flex:4}]}>
                      <Text style={styles.featurebuttonText}>Course Features</Text>
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

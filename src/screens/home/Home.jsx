
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.module";
import Carouselslider from "../../components/carouselslider/Carouselslider";
import { FontAwesome } from "@expo/vector-icons";
import { courses } from "../../shared/datas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Footer from "../footer/Footer";
import { useFocusEffect } from "@react-navigation/native";

const Home = ({ navigation, route }) => {

  const [userName, setUserName] = useState("")
  const [coursesDetails,setCoursesDetails] = useState([]);

  
  const handleCoursePress = (name, id) => {
    navigation.navigate("Course", { courseName: name , courseId: id});
  };

  const logout = async() => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    navigation.navigate("Welcome")
  }

  useEffect(()=>{
    console.log("working")

    const fetchCourses = async () => {
      const token = await AsyncStorage.getItem('token')
      const username = await AsyncStorage.getItem('username');
      setUserName(username);
      console.log(token,"==>")
      try {
          const response = await axios.get("http://3.20.9.90/api/categories",{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log(response.data.data, "courses details");
          setCoursesDetails(response.data.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message)
        } else {
          console.error(error);
        }
      }
  };

  fetchCourses();
  },[])

  return (
    <View style={{flex:1}}>
      <View>
        <Carouselslider />
      </View>
      <ScrollView>
        <View style={styles.greetingContainer}>
          <View>
            <Text style={styles.greetingText}>Hello, {userName}</Text>
            <Text style={styles.welcomeLink}>Welcome to Raaonline</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.offersButton}>
              <Text style={styles.offersButtonText}>% Offers</Text>
            </TouchableOpacity>
            <FontAwesome
              name="bell"
              size={20}
              color="lightblue"
              style={styles.notificationIcon}
            />
          </View>
        </View>

        <View style={styles.coursesSection}>
          <Text style={styles.sectionHeading}>Our Courses</Text>

          <View style={styles.cardRow}>
            {coursesDetails.map((course) => (
              <TouchableOpacity
                onPress={() => handleCoursePress(course.name, course.id)}
                key={course.id}
                style={styles.courseCard}
              >
                <Image source={{ uri: course.image }} style={styles.cardImage} />
                <Text style={styles.cardName}>{course.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View>
          <TouchableOpacity onPress={logout}>
              <Text>logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View>
        <Footer/>
      </View>
    </View>
  );
};

export default Home;

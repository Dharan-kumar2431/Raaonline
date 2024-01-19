
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.module";
import Carouselslider from "../../components/carouselslider/Carouselslider";
import { FontAwesome } from "@expo/vector-icons";
import { courses } from "../../shared/datas";

const Home = ({ navigation }) => {
  const username = "Dharan kumar";

  const handleCoursePress = (name) => {
    navigation.navigate("Course", { courseName: name });
  };

  return (
    <View style={{ marginTop: 20, paddingBottom: 20 }}>
      <View>
        <Carouselslider />
      </View>
      <ScrollView>
        <View style={styles.greetingContainer}>
          <View>
            <Text style={styles.greetingText}>Hello, {username}</Text>
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
            {courses.map((course) => (
              <TouchableOpacity
                onPress={() => handleCoursePress(course.name)}
                key={course.id}
                style={styles.courseCard}
              >
                <Image source={course.image} style={styles.cardImage} />
                <Text style={styles.cardName}>{course.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

import React, { useState } from "react";
import styles from "./Courses.module";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { courseDetails } from "../../shared/datas";
import { Picker } from "@react-native-picker/picker";

const CourseDetails = ({ navigation, route }) => {
  const [selectedValue, setSelectedValue] = useState("choose one")
  const courseHeading = route.params.courseName;
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4F94CD", "#FFD700"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
       <TouchableOpacity onPress={goBack} style={{flexDirection:"row",marginHorizontal:30}}>
          <FontAwesome name="angle-left" size={25} color="white" />
          <Text style={styles.goBack}>{"Go back"}</Text>
        </TouchableOpacity>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <Text style={styles.heading}>{courseHeading}</Text>

        <View style={styles.cardRow}>
          {courseDetails.map((course) => (
            <View key={course.id} style={styles.card}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <Image source={course.image} style={styles.cardImage} />
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
                  <Text style={styles.cardTitle}>{course.title}</Text>
                </View>
                <View style={styles.dropdownContainer}>
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }
                    style={styles.dropdown}
                  >
                    <Picker.Item label="Option 1" value="option1" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                  </Picker>
                </View>

                <Text style={styles.price}>{course.price}</Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.addToCartButton}>
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
    </View>
  );
};

export default CourseDetails;

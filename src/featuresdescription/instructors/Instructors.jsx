import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Instructors.module";
import { baseUrl } from "../../screens/services/Services";

const Instructors = ({ navigation, data }) => {
  const [instructorsData, setInstructorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInstructors = async () => {
      const getIdForInstructors = data.course_prices
        ? data.course_prices[0]?.course_id
        : data.sub_category_prices[0]?.sub_category_id;
      
      const token = await AsyncStorage.getItem("token");
      try {
        let url = `${baseUrl}/api/instructors`;
        if (data.course_prices) {
          url += `?course=${getIdForInstructors}`;
        } else {
          url += `?subCategory=${getIdForInstructors}`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data, "instructors data");
        setInstructorsData(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false); 
      }
    };
    fetchInstructors();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        instructorsData.map((instructor) => (
          <View key={instructor.id} style={styles.card}>
            <Image source={{ uri: instructor.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{instructor.name}</Text>
              <Text style={styles.description}>{instructor.designation}</Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default Instructors;

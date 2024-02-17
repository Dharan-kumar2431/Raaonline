import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ActivityIndicator, Modal, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Color } from "../../../components/misc/Colors";
import styles from "./Videoscontent.module";
import { baseUrl } from "../../services/Services";

const Videocontent = ({navigation,courseid,coursesDetails }) => {
  const [videoTopics, setVideoTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const response = await axios.get(
          `${baseUrl}/api/topics?course=${courseid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data, "video topics");
        setVideoTopics(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchTopics();
  }, [courseid]);

  const handleVideosPress = async (data) => {
    const token = await AsyncStorage.getItem("token");
    console.log(data.courses[0].topic_courses);
    const topicCourseData = data.courses[0].topic_courses;
    console.log(topicCourseData, "==>");

    const response = await axios.get(
      `${baseUrl}/api/videoLectures?course=${topicCourseData.course_id}&filterKey=topic&filterValue=${topicCourseData.topic_id}&status=1`
    ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data,"topic data")

      if(response.data.status === "success"){
        if(response.data.purchaseDetails.courseAccessible){
            console.log("true")
        } else {
            setShowModal(true);
            setSelectedTopic(data); 
        }
      }
  };

  const handleAddToCart = async() => {
    const token = await AsyncStorage.getItem("token");

    console.log(coursesDetails.course_prices, "courses details");

    try {
      const response = await axios.post(
        `${baseUrl}/api/carts`,
        {
          course_id: coursesDetails.course_prices[0].course_id,
          course_price_id: coursesDetails.course_prices[0].id,
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
    setShowModal(false); 
  };

  return (
    <View>
      {isLoading ? (
        <View style={[styles.loaderContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color={Color.PRIMARYCOLOR} />
        </View>
      ) : (
        <View>
          {videoTopics.map((topics, index) => (
            <TouchableOpacity
              key={topics.id}
              style={styles.videoCard}
              onPress={() => handleVideosPress(topics)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.videoIndex]}>{index + 1}.</Text>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text numberOfLines={2} style={styles.videoName}>
                    {topics.name}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text numberOfLines={1} style={styles.videoDescription}>
                      {topics.video_lecture_count > 0 && (
                        <Text numberOfLines={1} style={styles.videoDescription}>
                          {topics.video_lecture_count} Video lectures,{" "}
                        </Text>
                      )}
                      {topics.test_series_count > 0 && (
                        <Text numberOfLines={1} style={styles.videoDescription}>
                          {topics.test_series_count} Test,{" "}
                        </Text>
                      )}
                      {topics.ebook_count > 0 && (
                        <Text numberOfLines={1} style={styles.videoDescription}>
                          {topics.ebook_count} eBook,{" "}
                        </Text>
                      )}
                      {topics.slide_count > 0 && (
                        <Text numberOfLines={1} style={styles.videoDescription}>
                          {topics.slide_count} Slide{" "}
                        </Text>
                      )}
                    </Text>
                  </View>
                </View>
              </View>
              <FontAwesome name="lock" size={24} color={Color.SECONDARYCOLOR} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeading}>Subscription to premium</Text>
              <View style={styles.modalDivider} />
              <Text style={styles.modalText}>Available only for premium subscription</Text>
              <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Videocontent;

import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { Color } from "../../components/misc/Colors";
import YouTubePlayer from "react-native-youtube-iframe";
import Createaccountheader from "../createaccount/header/CreatePageHeader";
import Videocontent from "./videoscontant/Videoscontent";
import styles from "./Videolectures.module";
import DataLoader from "../loaders/dataloader/Dataloader";

const Videolectures = ({ navigation, route }) => {
  const [selectedOption, setSelectedOption] = useState("videos");
  const [youtubeVideoId, setYoutubeVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const courseId = route.params.courseId;
  const coursesData = route.params.coursesData

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const introVideoUrl = route.params.url;

    const match = introVideoUrl.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    if (match && match[1]) {
      setYoutubeVideoId(match[1]);
    } else {
      setYoutubeVideoId(null);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [route.params.url]);

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Createaccountheader navigation={navigation} name={"Go Back"} />
      </View>

      <View style={{ flex: 1 }}>
        {isLoading ? (
          <View style={[styles.loaderContainer]}>
          <DataLoader/>
        </View>
        ) : (
          <>
            <View style={styles.videoSection}>
              <YouTubePlayer
                height={220}
                play={false}
                videoId={youtubeVideoId}
              />
            </View>

            <View style={styles.navigationButtons}>
              <TouchableOpacity
                style={[
                  styles.navButton,
                  selectedOption === "videos" && styles.selectedNavButton,
                ]}
                onPress={() => handleOptionSelect("videos")}
              >
                <Text>Videos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.navButton,
                  selectedOption === "ebooks" && styles.selectedNavButton,
                ]}
                onPress={() => handleOptionSelect("ebooks")}
              >
                <Text>Ebooks</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.navButton,
                  selectedOption === "questions" && styles.selectedNavButton,
                ]}
                onPress={() => handleOptionSelect("questions")}
              >
                <Text>Questions</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.navButton,
                  selectedOption === "slides" && styles.selectedNavButton,
                ]}
                onPress={() => handleOptionSelect("slides")}
              >
                <Text>Slides</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.contentSection}>
              {selectedOption === "videos" && (
                <Videocontent style={{ flex: 1 }} navigation={navigation} courseid={courseId} coursesDetails={coursesData} />
              )}
              {selectedOption === "ebooks" && <Text>Ebooks</Text>}
              {selectedOption === "questions" && <Text>Questions</Text>}
              {selectedOption === "slides" && <Text>Slides</Text>}
            </ScrollView>

            <View style={styles.videolecturesFooter}>
              <View style={styles.footernav}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 12,
                    marginHorizontal: 15,
                    marginRight: 20,
                  }}
                >
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.buttonText}>Complete Lesson</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.sharebutton}
                    onPress={() => {}}
                  >
                    <MaterialIcons
                      name="share"
                      size={26}
                      color={Color.SECONDARYCOLOR}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Videolectures;

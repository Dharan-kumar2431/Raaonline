import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import styles from "./Features.module";
import Createaccountheader from "../screens/createaccount/header/CreatePageHeader";
import DataLoader from "../screens/loaders/dataloader/Dataloader";
import YouTubePlayer from "react-native-youtube-iframe";
import HTML from "react-native-render-html";
import { Color } from "../components/misc/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Instructors from "./instructors/Instructors";
import Overview from "./overview/Overview";

const Features = ({ navigation, route }) => {
  const [youtubeVideoId, setYoutubeVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("overview");
  const coursesData = route.params.data;

  console.log(coursesData,"parames of course details")

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [coursesData]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Createaccountheader navigation={navigation} name={"Go Back"} />
      </View>

      <View style={{ flex: 1 }}>
        {isLoading ? (
          <View style={[styles.loaderContainer]}>
            <DataLoader />
          </View>
        ) : (
          <>
            <ScrollView
              style={{ flex: 1, backgroundColor:"white", marginBottom: 50 }}
            >
              <View style={styles.descriptionContainer}>
                <View
                  style={{
                    // alignItems: "center",
                    // marginTop: 10,
                  }}
                >
                  {selectedTab === "overview" && (
                    <View style={{backgroundColor:"white"}}>
                        <Overview data={coursesData} />
                    </View>
                  )}
                  {selectedTab === "instructors" && (
                    <View>
                        <Instructors data={coursesData} />
                    </View>
                  )}
                  {selectedTab === "ratings" && (
                    <Text style={{ fontSize: 16, color: Color.SECONDARYCOLOR }}>
                      Ratings
                    </Text>
                  )}
                </View>
              </View>
            </ScrollView>

            <View style={styles.footer}>
              <TouchableOpacity
                onPress={() => handleTabChange("overview")}
                style={[
                  styles.tabButton,
                  selectedTab === "overview" && styles.selectedTabButton,
                ]}
              >
                <MaterialCommunityIcons
                  name="bookmark"
                  size={24}
                  color={
                    selectedTab === "overview"
                      ? Color.SECONDARYCOLOR
                      : "skublue"
                  }
                />
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === "overview" && styles.selectedTabButtonText,
                  ]}
                >
                  Overview
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleTabChange("instructors")}
                style={[
                  styles.tabButton,
                  selectedTab === "instructors" && styles.selectedTabButton,
                ]}
              >
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color={
                    selectedTab === "instructors"
                      ? Color.SECONDARYCOLOR
                      : "skublue"
                  }
                />
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === "instructors" &&
                      styles.selectedTabButtonText,
                  ]}
                >
                  Instructors
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleTabChange("ratings")}
                style={[
                  styles.tabButton,
                  selectedTab === "ratings" && styles.selectedTabButton,
                ]}
              >
                <MaterialCommunityIcons
                  name="star"
                  size={24}
                  color={
                    selectedTab === "ratings"
                      ? Color.SECONDARYCOLOR
                      : "skublue"
                  }
                />
                <Text
                  style={[
                    styles.tabButtonText,
                    selectedTab === "ratings" && styles.selectedTabButtonText,
                  ]}
                >
                  Ratings
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default Features;

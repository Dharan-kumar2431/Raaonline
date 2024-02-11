import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Video } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./Videolectures.module";
import Createaccountheader from "../createaccount/header/CreatePageHeader";
import { Color } from "../../components/misc/Colors";

const Videolectures = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("videos");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Createaccountheader navigation={navigation} name={"Go Back"} />
      </View>

      <View style={styles.videoSection}>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls={false}
          resizeMode="contain"
          style={{ width: "100%", height: 200 }}
        />
        <View style={styles.customControls}>
          <TouchableOpacity onPress={() => {}} style={styles.controlButton}>
            <MaterialIcons name="skip-previous" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.controlButton}>
            <MaterialIcons name="play-arrow" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.controlButton}>
            <MaterialIcons name="pause" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.controlButton}>
            <MaterialIcons name="skip-next" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
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
        {selectedOption === "videos" && <Text>Video Content Goes Here</Text>}
        {selectedOption === "ebooks" && <Text>Ebook Content Goes Here</Text>}
        {selectedOption === "questions" && (
          <Text>Questions Content Goes Here</Text>
        )}
        {selectedOption === "slides" && <Text>Slides Content Goes Here</Text>}
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
            <TouchableOpacity style={styles.sharebutton} onPress={() => {}}>
              <MaterialIcons name="share" size={26} color={Color.SECONDARYCOLOR} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Videolectures;

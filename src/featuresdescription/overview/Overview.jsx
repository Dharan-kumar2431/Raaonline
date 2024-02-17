import { ScrollView, Text, View } from "react-native";
import YouTubePlayer from "react-native-youtube-iframe";
import HTML from "react-native-render-html";
import { useEffect, useState } from "react";
import styles from "./Overview.module";
import { Color } from "../../components/misc/Colors";

const Overview = ({ data }) => {
  const [youtubeVideoId, setYoutubeVideoId] = useState(null);

  useEffect(() => {
    const introVideoUrl = data.course_intro_video || data.intro_video;

    const match = introVideoUrl.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    if (match && match[1]) {
      setYoutubeVideoId(match[1]);
    } else {
      setYoutubeVideoId(null);
    }
  }, [data]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.videoSection}>
        <YouTubePlayer height={220} play={false} videoId={youtubeVideoId} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <HTML
          source={{ html: data.description }}
          tagsStyles={{
            span: {
              color: Color.SECONDARYCOLOR,
              fontSize: 14,
            },
            p: {
              color: Color.SECONDARYCOLOR,
              marginTop: -7,
              fontSize: 14,
            },
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Overview;

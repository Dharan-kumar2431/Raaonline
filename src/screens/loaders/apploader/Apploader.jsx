import React from "react";
import { ActivityIndicator, View } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./Apploader.module";

const AppLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0195d4",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={styles.container}>
        <LottieView
          source={require("../../../../assets/apploader.json")}
          autoPlay
          loop
          style={styles.animation}
        />
      </View>
    </View>
  );
};

export default AppLoader;

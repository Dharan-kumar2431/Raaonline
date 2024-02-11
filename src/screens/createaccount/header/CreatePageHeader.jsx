import { Text, TouchableOpacity, View } from "react-native";
import styles from "./CreatePageHeader.module";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const Createaccountheader = ({ navigation, name, height = 100 }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <LinearGradient
        colors={["#2c5b8a","#2c5b8a", "#659e8a"]}
        style={[styles.header, { height }]}
        start={{ x: 0.6, y: 0 }}
      >
        <TouchableOpacity
          onPress={goBack}
          style={{ flexDirection: "row", marginHorizontal: 30 }}
        >
          <FontAwesome name="angle-left" size={25} color="white" />
          <Text style={styles.goBack}>{name}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Createaccountheader;

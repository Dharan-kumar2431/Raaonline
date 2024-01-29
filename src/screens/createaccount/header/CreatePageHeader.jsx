import { Text, TouchableOpacity, View } from "react-native";
import styles from "./CreatePageHeader.module";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const Createaccountheader = ({navigation, name}) => {
    const goBack = () => {
        navigation.goBack();
      };    
  return (
    <View>
      <LinearGradient
        colors={["#4F94CD", "#FFD700"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
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

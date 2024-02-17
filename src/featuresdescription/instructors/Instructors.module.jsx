import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    card: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      marginTop: 20,
      overflow: "hidden",
      elevation: 3,
      paddingHorizontal:10,
      marginHorizontal:10
    },
    image: {
      width: 100,
      height: 100,
    },
    textContainer: {
      flex: 1,
      padding: 15,
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 6,
      color:Color.SECONDARYCOLOR
    },
    description: {
      fontSize: 12,
    },
  });
export default styles;
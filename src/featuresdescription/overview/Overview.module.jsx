import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
    videoSection: {
        height: 220,
        backgroundColor: "black",
        marginBottom: 10,
      },
      contentContainer:{
        paddingHorizontal:10
      },
      descriptionContainer: {
        paddingHorizontal: 15,
        marginTop: 10,
      },
      descriptionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: Color.SECONDARYCOLOR
      },
})

export default styles
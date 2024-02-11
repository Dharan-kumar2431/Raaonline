import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  greetingText: {
    fontSize: 18,
    color: Color.TEXTCOLOR,
  },
  offersButton: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  offersButtonText: {
    color: "white",
    marginRight: 5,
    color: Color.TEXTCOLOR,
  },
  notificationIcon: {
    marginLeft: 25,
    marginTop: 8,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  welcomeLink: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 5,
  },
  coursesSection: {
    paddingHorizontal: 16,
    // paddingBottom: 300,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: Color.TEXTCOLOR,
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginHorizontal: -5,
  },
  courseCard: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "space-between",
    width: "45%",
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
  },
  cardImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 5,
  },
  cardName: {
    fontSize: 16,
    padding: 10,
    textAlign: "center",
    color: Color.TEXTCOLOR,
  },
  loaderContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default styles;

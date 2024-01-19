import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  greetingText: {
    fontSize: 18,
    color: "#262673",
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
    color: "#262673",
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
    paddingBottom: 300,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#262673",
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    color: "#262673",
  },
});

export default styles;

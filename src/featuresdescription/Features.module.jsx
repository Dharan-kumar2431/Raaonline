import { StyleSheet } from "react-native";
import { Color } from "../components/misc/Colors";

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  tabButtonText: {
    fontSize: 16,
    marginTop: 5,
    color: Color.SECONDARYCOLOR,
  },
  selectedTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: Color.TEXTCOLOR,
  },
  selectedTabButtonText: {
    color: "skyblue",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});

export default styles;

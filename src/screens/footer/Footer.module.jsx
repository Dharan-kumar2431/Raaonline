import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    // height: 120,
    backgroundColor:"#f8f8f8"
  },
  footernav: {
    backgroundColor: "white",
    marginTop: 10,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    fontSize: 12,
    color:"#0468CC"
  },
  selectedDot :{
    position: "absolute",
    top: -3,
    width: 3,
    height: 3,
    borderRadius: 50,
    backgroundColor:"#3481CA"
  }
});

export default styles;

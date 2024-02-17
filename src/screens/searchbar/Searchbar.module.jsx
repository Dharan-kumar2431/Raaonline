import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    },
searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainer: {
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "lightgray",
    borderBottomWidth: 1,
    width: "95%",
  },
  input: {
    flex: 1,
    paddingVertical: 5,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputContainer: {
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "blue",
    borderBottomWidth: 1,
    width: "90%",
  },
  searchbar: {
    position: "absolute",
    width:"100%",
    top:60,
    zIndex:1,
  },
  resultContainer: {
    marginVertical: 30,
  },
  resultItem: {
    // borderWidth:1,
    width: "90%",
    marginBottom: 10,
    backgroundColor: "white", 
    borderRadius: 8,
    marginVertical: 8,
    elevation: 1,
  },
  countryName: {
    padding: 20,
    paddingVertical: 15,
    fontWeight: "bold",
    fontSize:16
  },
});

export default styles;

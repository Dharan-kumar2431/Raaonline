import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  personalDetailsContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  personaldetailsNames:{
    flexDirection: "row", 
    marginBottom: 10 
  },
  fulllengthInputs:{
    marginBottom: 10, 
    color:"black"
  },
  inputs:{
    padding:10,
    borderWidth:1,
    borderColor:"lightgray"
  },
  cancelbtn:{
    padding:15,
    backgroundColor:"#9dd7ef",
    borderRadius:5,
    paddingHorizontal:40
  },
  savebtn:{
    marginLeft:5,
    padding:15,
    borderRadius:5,
    paddingHorizontal:78,
  },
});

export default styles;

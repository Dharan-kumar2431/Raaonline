import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";

const styles = StyleSheet.create({
  header: {
    height: 100,
    justifyContent: "flex-end",
    //   alignItems: 'center',
  },
  goBack: {
    color: "white",
    paddingBottom: 30,
    paddingHorizontal: 10,
    marginTop: 3,
  },
  registrationHeading: {
    fontSize: 16,
    fontWeight: "500",
    color: Color.TEXTCOLOR,
    // textAlign: "center",
    marginHorizontal:40,
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    paddingLeft: 10,
    fontWeight: "500",
    marginBottom: 5,
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Color.TEXTCOLOR,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
    borderColor: Color.TEXTCOLOR,
  },
  checkboxtext: {
    color: Color.TEXTCOLOR,
  },
  button: {
    // backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginLeft:10,
    alignItems: "center",
    width:"50%",
    height:45
  },
  activeButton: {
    backgroundColor: "lightblue",
  },
  inactiveButton: {
    backgroundColor: "lightgray",
  },
  checkboxText:{
    color:Color.TEXTCOLOR,
    fontSize:12
  }
  // dropdownContainer: {
  //   position: "relative",
  //   width: 300,
  // },

  // dropdown: {
  //   margin: 16,
  //   height: 50,
  //   borderBottomColor: "gray",
  //   borderBottomWidth: 0.5,
  //   width: 70,
  //   borderWidth: 1,
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   zIndex: 1,
  // },
  // icon: {
  //   marginRight: 5,
  // },
  // placeholderStyle: {
  //   fontSize: 16,
  // },
  // selectedTextStyle: {
  //   fontSize: 16,
  // },
  // iconStyle: {
  //   width: 20,
  //   height: 20,
  // },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  // },
  // flagImage: {
  //   width: 50,
  //   height: 20,
  //   marginRight: 10,
  // },
});

export default styles;

import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";

const styles = StyleSheet.create({
  videoSection: {
    marginBottom:5
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    // backgroundColor: "#eee",
  },
  customControls: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  controlButton: {
    marginHorizontal: 10,
  },
  selectedNavButton: {
    // backgroundColor: "#00468D",
    // color: "#fff",
    borderBottomWidth:2,
    borderBottomColor:Color.SECONDARYCOLOR
  },
  contentSection: {
    paddingHorizontal: 20,
  },
  videolecturesFooter: {
    backgroundColor: "#f8f8f8",
  },
  footernav: {
    backgroundColor: "white",
    marginTop: 10,
    height: 60,
    width: "100%",
  },
  button: {
    backgroundColor: Color.SECONDARYCOLOR,
    borderRadius: 5,
    marginRight: 10,
    padding:10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "500",
  },
  sharebutton:{
    borderWidth:1,
    borderColor:Color.SECONDARYCOLOR,
    alignItems:"center",
    justifyContent:"center",
    paddingHorizontal:15
  }
});

export default styles;

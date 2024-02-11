import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";

const styles = StyleSheet.create({
  personalDetailscontainer: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 100,
    zIndex:1
  },
  personalDetailsinnercontainer: {
    width: "85%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#3E8BFE",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0,
    shadowRadius: 3.84,
    elevation:5,
  },
  personalDetails: {
    margin: 6,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    padding:5,
    paddingHorizontal:15
  },
  detailsText:{
    color:"#263873",
    fontSize:12
  },
  profilelist:{
    alignItems: "center",
    width: "100%",
    marginTop:70
  },
  profilelistContainer:{
    width: "83%",
  },
  listItems:{
    backgroundColor:"#e1e6f0",
    padding:5,
    paddingVertical:20,
    borderRadius:5,
    paddingLeft:15,
    marginBottom:10,
  },
  listitemstext:{
    color:Color.TEXTCOLOR,
    fontWeight:"500"
  },
  logout:{
    backgroundColor:"#e1e6f0",
    paddingVertical:20,
    borderRadius:5,
    marginBottom:10,
    alignItems:"center"
  }
});

export default styles;

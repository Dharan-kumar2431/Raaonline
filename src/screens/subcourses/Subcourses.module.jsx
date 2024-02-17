import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
    color:Color.SECONDARYCOLOR
  },
  cardRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    flexBasis: "49%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    marginBottom: 16,
    padding: 10,
    zIndex:0
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  iconArrowContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "bold",
    padding: 10,
    color:Color.SECONDARYCOLOR
  },
  actualprice:{
    color:"gray",
    fontSize:14,
    marginLeft:5
  },
  price:{
    color:Color.SECONDARYCOLOR,
    paddingVertical:5,
    fontSize:14,
    marginLeft:5
  },
  offerPercentage:{
    marginLeft:12,
    paddingVertical:5,
    color:Color.SECONDARYCOLOR
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 0,
    justifyContent:"space-between",
    marginTop:5
  },
  addToCartButton: {
    backgroundColor:Color.SECONDARYCOLOR,
    borderRadius: 5,
    alignItems:"center",
    paddingVertical:5
  },
  featuresButton: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.SECONDARYCOLOR,
    alignItems:"center",
    marginLeft:5,
    paddingVertical:5
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  featurebuttonText: {
    color: Color.SECONDARYCOLOR,
    fontSize: 12,
    fontWeight:"500"
  },
  crossline:{
    position:"relative",
    top:10,
    height:1.5,
    width:85,
    backgroundColor:"gray",
    transform: [{ rotate: "12deg" }],
  },
  loaderContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  searchbar: {
    position: "absolute",
    width:"100%",
    top:60,
    zIndex:1,
  },
});

export default styles;

import { StyleSheet } from "react-native";

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
    color:"#00468D"
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
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
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
    color:"#00468D"
  },
  dropdownButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  dropdownButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  actualprice:{
    color:"gray",
    paddingTop:10,
    fontSize:14,
    marginLeft:5
  },
  price:{
    color:"#00468D",
    paddingVertical:10,
    fontSize:14,
    marginLeft:5
  },
  offerPercentage:{
    marginLeft:12,
    paddingVertical:10,
    color:"00468D"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  addToCartButton: {
    backgroundColor: "#00468D",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  featuresButton: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#00468D",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  featurebuttonText: {
    color: "#00468D",
    fontSize: 12,
    fontWeight:"500"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    // paddingHorizontal:20,
  },
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign:"center",
    color:"#00468D"
    // borderBottomWidth:1,
    // borderColor:"lightgray",
    // paddingBottom:5
  },
  subscriptionPlan: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedPlan: {
    borderColor: "black",
    backgroundColor: "#f0f0f0",
  },
  checkboxButton:{
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#f0f2f7",
    marginBottom:10,
    paddingVertical:5,
    paddingHorizontal:15,
    paddingBottom:10,
  },
  checkboxs:{
    justifyContent:"center",
  },
  checkboxLabel:{
    marginLeft:15
  },
  subCategoryTitle:{
    fontSize:15,
    fontWeight:"bold",
    color:"#00468D"
  },
  subdescription:{
    color:"gray",
    paddingVertical:5,
    fontWeight:"bold",
    fontSize:14
  },
  crossline:{
    position:"relative",
    top:10,
    height:1.5,
    width:85,
    backgroundColor:"gray",
    transform: [{ rotate: "12deg" }],
  },
  modelprice:{
    color:"gray",
    fontSize:14
  },
  modelofferprice:{
    color:"#00468D",
    padding:3,
    fontSize:14,
    paddingHorizontal:10,
  },
  duration:{
    color:"#59a4f0",
  },
  continueButton: {
    backgroundColor: "#00468D",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  continueButtonDisabled: {
    backgroundColor: "gray",
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;

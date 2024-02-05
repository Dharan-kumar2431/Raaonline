import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginVertical: 7,
    marginHorizontal:25,
    borderWidth: 1,
    borderColor: "#00468D",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
  },
  imageContainer: {
    marginRight: 15,
  },
  image: {
    width: 60,
    height: 85,
    resizeMode: "cover",
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 2,
  },
  subCategory: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color:"#00468D"
  },
  category: {
    fontSize: 12,
    marginBottom: 5,
    color:"#0468CC"
  },
  price: {
    fontSize: 12,
  },
  removeButton: {
    padding: 5,
  },
  crossline:{
    position:"relative",
    top:10,
    height:1.5,
    width:65,
    backgroundColor:"gray",
    transform: [{ rotate: "12deg" }],
  },
  modelprice:{
    color:"gray",
    fontSize:12
  },
  modelofferprice:{
    color:"#0468CC",
    padding:2,
    fontSize:12,
    paddingHorizontal:10,
  },
  totalCard: {
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  innerCard: {
    flex: 1,
    padding: 15,
  },
  selectCoupon:{
    backgroundColor:"white",
    alignItems:"flex-end",
    paddingRight:10,
    paddingTop:10,
    borderRadius:5
  },
  selectCouponText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    color: "#00468D",
  },
  subTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop:10
  },
  subTotalText: {
    fontSize: 16,
    color: "white",
    fontWeight:"500"
  },
  subTotalAmount: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    paddingRight:10
  },
  discountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  discountText: {
    fontSize: 16,
    color: "white",
    fontWeight:"500"
  },
  discountAmount: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    paddingRight:10
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 5,
  },
  totalText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    paddingRight:10
  },
  buyNowButton: {
    backgroundColor: "#00468D",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buyNowText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
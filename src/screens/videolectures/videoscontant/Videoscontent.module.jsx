import { StyleSheet } from "react-native";
import { Color } from "../../../components/misc/Colors";

const styles = StyleSheet.create({
    videoCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom:10,
    backgroundColor:"white",
    width:"100%",
    paddingRight:30,
  },
  videoIndex: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
    color: Color.SECONDARYCOLOR
  },
  videoName: {
    fontSize: 16,
    fontWeight: "bold",
    color: Color.SECONDARYCOLOR
  },
  videoDescription: {
    fontSize: 12,
    color: "#666",
  },
  loaderContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  modalText: {
    textAlign: "center",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { Color } from "../../../components/misc/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    margin:10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: Color.SECONDARYCOLOR
  },
  category: {
    fontSize: 16,
    marginBottom: 5,
    color: Color.SECONDARYCOLOR
  },
  offerPrice: {
    fontSize: 16,
    marginBottom: 10,
    color: Color.SECONDARYCOLOR
  },
  goToCartButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addToCartButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default styles;

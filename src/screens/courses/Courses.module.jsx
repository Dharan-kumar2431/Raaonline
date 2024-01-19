import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    justifyContent: "flex-end",
    //   alignItems: 'center',
  },
  goBack: {
    color: "white",
    paddingBottom: 30,
    paddingHorizontal: 10,
    marginTop: 3
  },
  content: {
    padding: 16,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 10,
    color: "blue",
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
    //   height: 350
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
    color: "blue",
    //   height:80
  },
  dropdownContainer: {
    // justifyContent: 'space-between',
    // borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor:"lightblue",
  },
  dropdown: {
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    //   padding: 10,
    marginBottom: 0,
  },
  addToCartButton: {
    backgroundColor: "blue",
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
    borderColor: "blue",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  featurebuttonText: {
    color: "blue",
    fontSize: 12,
  },
});

export default styles;

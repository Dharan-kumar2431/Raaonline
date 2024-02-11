import { StyleSheet } from "react-native";
import { Color } from "../../../components/misc/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    elevation: 5, 
    alignItems:"center"
  },
  ball: {
    width: 20,
    height: 20,
    backgroundColor: '#FF6347',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: Color.SECONDARYCOLOR,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { Color } from "../../../components/misc/Colors";

const styles = StyleSheet.create({
    registrationHeading: {
        fontSize: 25,
        fontWeight: "500",
        color: Color.SECONDARYCOLOR,
        // textAlign: "center",
        marginHorizontal:40,
        marginVertical: 20,
        marginTop: 40
      },
      otpsubheading:{
        fontSize:14,
        marginHorizontal:40,
        color:Color.SECONDARYCOLOR
      },
      otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20,
        textAlign: "center",
        marginHorizontal: 5,
      },
      submitButton: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
      },
})

export default styles
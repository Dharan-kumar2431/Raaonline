import { StyleSheet } from "react-native";
import { Color } from "../../../components/misc/Colors";

const styles = StyleSheet.create({
    changePasswordContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      headerText:{
        fontSize:14,
        paddingHorizontal:10
      },
      formContainer: {
        paddingHorizontal: 10,
        marginTop: 15,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 10,
      },
      input: {
        flex: 1,
        height: 45,
        fontSize: 14,
        paddingLeft: 10,
        color:Color.SECONDARYCOLOR
      },
      eyeIcon: {
        position: 'absolute',
        right: 10,
      },
      submitButton: {
        backgroundColor: Color.SECONDARYCOLOR,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
      },
      submitButtonText: {
        color: 'white',
        fontSize: 16,
      },
      errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
      },
})

export default styles;
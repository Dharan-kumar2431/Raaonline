import { StyleSheet } from "react-native";
import { Color } from "../../components/misc/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:30,
      },
      gradientSquare: {
        width: 350,
        height: 350,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      innerSquare:{
        width: 320,
        height: 320,
        // elevation:0.5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: 10,
      },
      logoImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
      },
      companyText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
      },
      subtitleText: {
        fontSize: 25,
        color: 'white',
      },
      loginForm: {
        width: '80%',
        marginTop: 20,
      },
      loginHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: Color.TEXTCOLOR
      },
      input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 10,
        borderRadius: 5,
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "gray",
        borderRadius: 5,
        marginBottom: 5,
        borderWidth:1,
        paddingLeft: 10,
        justifyContent:"space-between",
      },
      eyeIconContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
      },
      eyeIcon: {
        padding: 10,
      },
      forgotPassword: {
        textAlign: 'right',
        color: 'blue',
        marginBottom: 25,
      },
      button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      activeButton: {
        backgroundColor: 'blue',
      },
      inactiveButton: {
        backgroundColor: 'lightgray',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      createAccountButton: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginTop: 16,
        alignItems: 'center',
      },
      createAccountText: {
        color: 'blue',
        fontSize: 16,
      },
      orContainer: {
        alignItems: 'center',
        marginTop: 16,
      },
      orText: {
        color: 'gray',
        fontSize: 16,
      },
      googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 16,
      },
      googleButtonText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
      },
});

export default styles;
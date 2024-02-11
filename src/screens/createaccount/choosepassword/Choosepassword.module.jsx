import { StyleSheet } from "react-native";
import { Color } from "../../../components/misc/Colors";

const styles = StyleSheet.create({
    registrationHeading: {
        fontSize: 16,
        fontWeight: "500",
        color: Color.TEXTCOLOR,
        // textAlign: "center",
        marginHorizontal:40,
        marginVertical: 30,
        marginTop:40,
      },
      input:{
        width:"70%",
        height:50,
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
      section: {
        flexDirection: "row",
        alignItems: "center",
        width:"80%",
        marginVertical:30
      },
      checkbox: {
        margin: 8,
        borderColor: Color.TEXTCOLOR,
      },
      checkboxText: {
        color: Color.TEXTCOLOR,
        fontSize:15,
        paddingTop:10
      },
      backarrow:{
        borderWidth:1,
        width:50,
        padding:8,
        paddingHorizontal:10,
        borderRadius:5,
        borderColor:Color.TEXTCOLOR
      },
      button: {
        // backgroundColor: "lightblue",
        padding: 12,
        borderRadius: 5,
        alignItems: "center",
        marginLeft:10,
        alignItems: "center",
        width:235
      },
      activeButton: {
        backgroundColor: "lightblue",
      },
      inactiveButton: {
        backgroundColor: "lightgray",
      },
      errorText: {
        fontSize: 12,
        color: "red",
        marginTop: 5,
      },
})

export default styles;
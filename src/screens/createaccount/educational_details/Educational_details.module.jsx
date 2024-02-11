import { StyleSheet } from "react-native";
import { Color } from "../../../components/misc/Colors";

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    header: {
        height: 100,
        justifyContent: "flex-end",
        //   alignItems: 'center',
      },
      goBack: {
        color: "white",
        paddingBottom: 30,
        paddingHorizontal: 10,
        marginTop: 3,
      },
      registrationHeading: {
        fontSize: 16,
        fontWeight: "500",
        color: Color.TEXTCOLOR,
        // textAlign: "center",
        marginHorizontal:40,
        marginVertical: 20,
      },
    currenteduication:{
        borderWidth:1,
        width:"80%",
        borderColor:Color.TEXTCOLOR,
        borderRadius:5,
    },
    input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 20,
        marginBottom: 5,
        marginVertical: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Color.TEXTCOLOR,
        width:310,
        color:Color.TEXTCOLOR
      },
      calender:{
        borderWidth:1,
        flexDirection:"row",
        width:"80%",
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 20,
        marginBottom: 5,
        marginVertical: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Color.TEXTCOLOR,
        color:Color.TEXTCOLOR,
        // justifyContent:"space-between",
        paddingRight:20
      },
      yearofadmin:{
        marginLeft: 40,
        marginTop:20,
        marginBottom:5
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
})


export default styles
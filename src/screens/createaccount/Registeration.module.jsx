import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        height: 130,
        justifyContent: "flex-end",
        //   alignItems: 'center',
      },
      goBack: {
        color: "white",
        paddingBottom: 30,
        paddingHorizontal: 10,
        marginTop: 3
      },
      registerationheading:{
        fontSize:20,
        fontWeight:"500",
        color:"#262673",
        textAlign:"center",
        marginVertical: 40
      },
      input: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        width:"80%",
        paddingLeft:10,
        fontWeight:"500",
        marginBottom:13
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkbox: {
        margin: 8,
        borderColor:"#262673"
      },
      checkboxtext:{
        color:"#262673",
      },
      button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width:"50%",
        alignItems:"center"
      },
      activeButton: {
        backgroundColor: 'blue',
      },
      inactiveButton: {
        backgroundColor: 'lightgray',
      },  
})

export default styles
import { Text, View } from "react-native";
import styles from "./Cart.module";
import { useEffect } from "react";
import Createaccountheader from "../createaccount/header/CreatePageHeader";

const Cart = ({navigation, route }) => {
    const selectedPlan = route.params?.SelectedPrice;

    useEffect(()=>{
        console.log(selectedPlan, "==>selected plane")
    },[])

    return(
        <View>
           <View>
           <Createaccountheader navigation={navigation} name={"Checkout"} />
           </View>
        </View>
    )
} 

export default Cart
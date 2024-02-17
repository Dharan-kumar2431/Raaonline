import React, { Text, TouchableOpacity, View } from "react-native"
import styles from "./Myfavourites.module"
import { useEffect, useState } from "react"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Createaccountheader from "../../createaccount/header/CreatePageHeader"
import { baseUrl } from "../../services/Services"

const Myfavourites = ({navigation}) => {
    const [myFavouritesList, setMyFavouritesList] = useState([])

    useEffect(()=>{
        const fetchFavouritesList = async() =>{
            const token = await AsyncStorage.getItem('token');
            try {
                const response = await axios.get(`${baseUrl}/api/favorites`, {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                });
                setMyFavouritesList(response.data.data); 
              } catch (error) {
                if (axios.isAxiosError(error)) {
                  console.error(error.response.data);
                  alert(error.response.data.message);
                } else {
                  console.error(error);
                }
              }
        }
        fetchFavouritesList();
    },[])

    return(
        <View style={styles.container}>
            <View>
                <Createaccountheader navigation={navigation}
          name={"Your Profile"}/>
            </View>
            {myFavouritesList.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.category}>{item.categories[0].name}</Text>
                    <Text style={styles.offerPrice}>Rs. {parseFloat(item.sub_category_prices[0].offer_price).toFixed(2)}</Text>
                    {item.is_added_in_cart ? (
                        <TouchableOpacity style={styles.goToCartButton}>
                            <Text style={styles.buttonText}>Go to Cart</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.addToCartButton}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}
        </View>
    )
}

export default Myfavourites

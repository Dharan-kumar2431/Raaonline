import React, { useState, useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, ToastAndroid, ActivityIndicator } from "react-native";
import styles from "./Cart.module";
import Createaccountheader from "../createaccount/header/CreatePageHeader";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../footer/Footer";
import DataLoader from "../loaders/dataloader/Dataloader";
import { baseUrl } from "../services/Services";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState({ subCategories: [], courses: [] });
  const [cartTotal, setCartTotal] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await axios.get(`${baseUrl}/api/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data,"cart items")
      
      // Filter out subcategories and courses separately
      const subCategories = response.data.data.items.filter(item => item.sub_category !== null);
      const courses = response.data.data.items.filter(item => item.course !== null);
      
      // Update state for both subcategories and courses
      setCartItems({ subCategories, courses });
      setCartTotal(response.data.data.cartTotal);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
        alert(error.response.data.message);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const onRemove = async (itemId) => {
    const token = await AsyncStorage.getItem("token");
    console.log(itemId);
    try {
      await axios.delete(`${baseUrl}/api/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          sub_category_id: itemId,
        },
      });
      fetchData();
      showToast("Item removed successfully");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
        alert(error.response.data.message);
      } else {
        console.error(error);
      }
    }
  };

  const onRemoveCourse = async (itemId) => {
    const token = await AsyncStorage.getItem("token");
    console.log(itemId);
    try {
      await axios.delete(`${baseUrl}/api/carts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          course_id: itemId,
        },
      });
      fetchData();
      showToast("Item removed successfully");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
        alert(error.response.data.message);
      } else {
        console.error(error);
      }
    }
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Createaccountheader navigation={navigation} name={"Checkout"} />
      </View>
      {loading ? ( 
        <View style={[styles.loaderContainer]}>
          <DataLoader/>
        </View>
      ) : (
        <ScrollView>
          {cartItems.subCategories.length === 0 && cartItems.courses.length === 0 && (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>No items in your cart</Text>
            </View>
          )}
          {cartItems.subCategories.length > 0 && (
            <View style={{marginTop:15}}>
              {cartItems.subCategories.map(item => (
                <View key={item.id} style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: item.sub_category.image }}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.subCategory}>{item.sub_category.name}</Text>
                    <Text style={styles.category}>
                      {item.sub_category.categories[0].name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <View style={styles.crossline} />
                        <Text style={styles.modelprice}>
                          Rs. {item.sub_category_price.actual_price}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.modelofferprice}>
                          Rs. {item.sub_category_price.offer_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => onRemove(item.sub_category_id)}
                    style={styles.removeButton}
                  >
                    <FontAwesome name="times" size={20} color="lightgray" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
          {cartItems.courses.length > 0 && (
            <View style={{marginTop:15}}>
              {cartItems.courses.map(item => (
                <View key={item.id} style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: item.course.image }}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.subCategory}>{item.course.name}</Text>
                    <Text style={styles.category}>
                      {item.course.sub_categories[0].name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        <View style={styles.crossline} />
                        <Text style={styles.modelprice}>
                          Rs. {item.course_price.actual_price}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.modelofferprice}>
                          Rs. {item.course_price.offer_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => onRemoveCourse(item.course_id)}
                    style={styles.removeButton}
                  >
                    <FontAwesome name="times" size={20} color="lightgray" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
      )}
      {(cartItems.subCategories.length > 0 || cartItems.courses.length > 0 || cartTotal > 0) && (
        <View style={styles.totalCard}>
          <Image
            source={require("../../../assets/cartcardbgimg.png")}
            style={styles.backgroundImage}
          />
          <View style={styles.innerCard}>
            <TouchableOpacity onPress={() => navigation.navigate("SelectCoupon")} style={styles.selectCoupon}>
              <Text style={styles.selectCouponText}>Select Coupon</Text>
            </TouchableOpacity>
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Subtotal</Text>
              <Text style={styles.subTotalAmount}>Rs. {cartTotal}</Text>
            </View>
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>Discount</Text>
              <Text style={styles.discountAmount}>Rs. 0</Text>
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalAmount}>Rs. {cartTotal}</Text>
            </View>
            <TouchableOpacity style={styles.buyNowButton}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* <View>
        <Footer/>
      </View> */}
    </View>
  );
};

export default Cart;

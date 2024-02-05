import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Profile.module";
import Createaccountheader from "../createaccount/header/CreatePageHeader";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import Footer from "../footer/Footer";
import { CommonActions } from "@react-navigation/native";
import { LoginContext } from "../context/logincontext/Logincontext";

const Profile = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState([]);
  const deviceTok = useContext(LoginContext)

  console.log(deviceTok, "========================>")

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      try {
        const userData = await axios.get("http://3.20.9.90/api/users/getMe", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(userData.data, "user Details");
        setUserDetails(userData.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response.data);
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      }
    })();
  }, []);

  const handleLagout = async() => {
    try{
      const token = await AsyncStorage.getItem("token");
      const deviceToken = await AsyncStorage.getItem('deviceTocken');
      console.log(deviceToken)
      const response = await axios.post("http://3.20.9.90/api/users/logout",
        {
          user_id:userDetails.id,
          device_token:deviceToken
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data)

      if(response.data.status === "success"){
        alert(response.data.message)
        await AsyncStorage.setItem('isLoggedIn', 'false');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Welcome' }],
          })
        );
      }
    }catch(error){
      if (axios.isAxiosError(error)) {
        console.error(error.response.data);
        alert(error.response.data.message);
      } else {
        console.error(error);
      }
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Createaccountheader
          navigation={navigation}
          name={"Your Profile"}
          height={150}
        />
      </View>
      <View style={styles.personalDetailscontainer}>
        <View style={styles.personalDetailsinnercontainer}>
          <View style={styles.personalDetails}>
            <Text
              style={[
                styles.detailsText,
                { fontWeight: "bold", paddingTop: 4, fontSize: 16 },
              ]}
            >
              {userDetails.first_name}
            </Text>
            <Text style={[styles.detailsText, { paddingVertical: 3 }]}>
              {userDetails.email}
            </Text>
            <Text style={styles.detailsText}>{userDetails.phone_number}</Text>
            <Text style={styles.detailsText}>
              {userDetails.state}State - {userDetails.country_name}Country
            </Text>
          </View>
        </View>
      </View>
        <ScrollView style={{}}>
          <View>
          <View style={styles.profilelist}>
            <View style={styles.profilelistContainer}>
              <View>
                <TouchableOpacity style={styles.listItems}>
                  <Text style={styles.listitemstext}>My Account</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.listItems}>
                  <Text style={styles.listitemstext}>My Favourites</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.listItems}>
                  <Text style={styles.listitemstext}>My Courses</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.listItems}>
                  <Text style={styles.listitemstext}>
                    Contact Us for Subscription
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.listItems}>
                  <Text style={styles.listitemstext}>Change Password</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.listItems}>
                  <Text style={styles.listitemstext}>My Orders</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.listItems}>
                  <Text style={styles.listitemstext}>About us</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.logout} onPress={()=> handleLagout()}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="sign-out" size={24} color="#262673" />
                    <Text
                      style={[
                        styles.listitemstext,
                        { marginLeft: 5, fontWeight: "bold", fontSize: 16 },
                      ]}
                    >
                      Logout
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{alignSelf:"flex-start",marginBottom:10}}>
                <TouchableOpacity>
                  <Text style={[styles.listitemstext,{marginLeft:5,fontWeight:"bold",fontSize:16}]}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>
              <View style={{alignSelf:"flex-start",marginBottom:8}}>
                <TouchableOpacity>
                  <Text style={[styles.listitemstext,{marginLeft:5,fontWeight:"bold",fontSize:16}]}>Terms and Conditions</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom:5,alignItems:"center"}}>
                  <Text style={[styles.listitemstext,{fontWeight:"bold",fontSize:16}]}>App Version 2.0.5(25)</Text>
              </View>
              
            </View>
          </View>
          </View>
        </ScrollView>
        <View>
          <Footer/>
        </View>
    </View>
  );
};

export default Profile;

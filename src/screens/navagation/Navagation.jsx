import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Registeration from "../createaccount/Registeration";
import Educationaldetails from "../createaccount/educational_details/Educational_details";
import Searchcontriesandstates from "../createaccount/searchcountriesandstate/Searchcontriesandstates";
import Choosepassword from "../createaccount/choosepassword/Choosepassword";
import Verifyotp from "../createaccount/verifyotp/Verifyotp";
import CourseDetails from "../courses/Courses";
import Welcome from "../welcome/Welcome";
import Home from "../home/Home";
import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../footer/Footer";
import Cart from "../cart/Cart";
import Profile from "../profile/Profile";
import Myaccount from "../profile/myaccount/Myaccount";
import Changepassword from "../profile/changepassword/Changepassword";
import FlashMessage from 'react-native-flash-message';
import Subcourses from "../subcourses/Subcourses";
import Videolectures from "../videolectures/Videolectures";
import AppLoader from "../loaders/apploader/Apploader";
import Features from "../../featuresdescription/Features";
import Myfavourites from "../profile/myfavourites/Myfavourites";
import Aboutus from "../profile/aboutus/Aboutus";
import Contactus from "../profile/contactus/Contactus";
import Privacypolicy from "../profile/privicypolicy/Privacypolicy";

const stack = createNativeStackNavigator();
const appStack = createNativeStackNavigator();


const Navigation = () => {
  const [loginStatus, setLoginStatus] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async()=>{
      const status = await AsyncStorage.getItem("isLoggedIn");
      console.log(status);
      setLoginStatus(status);
    },2000)
  }, []);

  if (loginStatus === null) {
    return (
      <View style={styles.container}>
        <AppLoader/>
      </View>
    );
  } else {
    return (
      <>
        <stack.Navigator
          initialRouteName={loginStatus === "true" ? "Home" : "Welcome"}
        >
          <stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Registeration"
            component={Registeration}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Educationaldetails"
            component={Educationaldetails}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Searchcountriesandstate"
            component={Searchcontriesandstates}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Choosepassword"
            component={Choosepassword}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Verifyotp"
            component={Verifyotp}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Home"
            component={Appnavagator}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Videolectures"
            component={Videolectures}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Features"
            component={Features}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Favourites"
            component={Myfavourites}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Aboutus"
            component={Aboutus}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Contactus"
            component={Contactus}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="Privacypolicy"
            component={Privacypolicy}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </>
    );
  }
};

const Appnavagator = () => {
  return(
    <>
    <appStack.Navigator initialRouteName="Homes">
    <appStack.Screen
          name="Homes"
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Course"
          component={CourseDetails}
          options={{ headerShown: false }}
        />
         <stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
          <stack.Screen
          name="Myaccount"
          component={Myaccount}
          options={{ headerShown: false }}
        />
          <stack.Screen
          name="Changepassword"
          component={Changepassword}
          options={{ headerShown: false }}
        />
         <stack.Screen
          name="Subcourses"
          component={Subcourses}
          options={{ headerShown: false }}
        />
    </appStack.Navigator>
    <FlashMessage position="bottom" />
    <Footer/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navigation;

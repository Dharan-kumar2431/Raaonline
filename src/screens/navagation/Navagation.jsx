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
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../footer/Footer";
import Cart from "../cart/Cart";

const stack = createNativeStackNavigator();

const Navigation = () => {
  const [loginStatus, setLoginStatus] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const status = await AsyncStorage.getItem("isLoggedIn");
      console.log(status);
      setLoginStatus(status);
    };
    checkLoginStatus();
  }, []);



  if (loginStatus === null) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

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
      </stack.Navigator>
      {/* {loginStatus === "true" && <Footer />} */}
    </>
  );
};

export default Navigation;

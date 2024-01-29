import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/welcome/Welcome";
import Home from "./src/screens/home/Home";
import CourseDetails from "./src/screens/courses/Courses";
import Registeration from "./src/screens/createaccount/Registeration";
import Educationaldetails from "./src/screens/createaccount/educational_details/Educational_details";
import Searchcontriesandstates from "./src/screens/createaccount/searchcountriesandstate/Searchcontriesandstates";
import Choosepassword from "./src/screens/createaccount/choosepassword/Choosepassword";
import Verifyotp from "./src/screens/createaccount/verifyotp/Verifyotp";
import { Provider } from "react-redux";
import store from "./src/store/store";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Welcome">
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
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

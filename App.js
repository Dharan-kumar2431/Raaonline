import { NavigationContainer } from "@react-navigation/native";
import { Provider} from "react-redux";
import store from "./src/store/store";
import Navigation from "./src/screens/navagation/Navagation";
import { initializeLoginState } from "./src/store/loginStatusSlice";
import { useEffect } from "react";

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

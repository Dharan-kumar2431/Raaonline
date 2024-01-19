import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/welcome/Welcome';
import Home from './src/screens/home/Home';
import CourseDetails from './src/screens/courses/Courses';
import Registeration from './src/screens/createaccount/Registeration';

const stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer >
     <stack.Navigator initialRouteName='Welcome'>
     <stack.Screen name='Welcome' component={Welcome} options={{headerShown: false}} />
     <stack.Screen name='Registeration' component={Registeration} options={{headerShown: false}} />

     <stack.Screen name='Home' component={Home} options={{headerShown: false}} />
     <stack.Screen name='Course' component={CourseDetails} options={{headerShown: false}} />
     </stack.Navigator>
    </NavigationContainer> 
  );
}

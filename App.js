import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signin from "./screens/signin";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import SignUp from "./screens/signup";
import LandingScreen from "./screens/LandingScreen";
import CameraScreen from "./screens/CameraScreen";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";


const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <CameraScreen />
    // <PaperProvider theme={theme}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="sigin" component={Signin} />
    //       <Stack.Screen name="home" component={HomeScreen} />

    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Signin from "./screens/signin";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import SignUp from "./screens/signup";
import LandingScreen from "./screens/LandingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageList from "./screens/ImageList";
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/VideoScreen";
import CameraScreen from "./screens/CameraScreen";
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
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "Sign In" }}
            name='sigin'
            component={Signin}
          />
          <Stack.Screen
            options={{ title: "Sign Up" }}
            name='signup'
            component={SignUp}
          />
          <Stack.Screen
            options={{ title: "Snap-A-Day" }}
            name='images'
            component={ImageList}
          />
          <Stack.Screen name='home' component={HomeScreen} />
          <Stack.Screen name='video' component={VideoScreen} />
          <Stack.Screen name='camera' component={CameraScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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

import { useState } from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { supabase } from "../utils";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("aldrinjenson@gmail.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);
    if (data) {
      console.log("Success");
      navigation.navigate("images");
    } else {
      console.log("error in logging in");
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ paddingTop: "8%", paddingHorizontal: "3%" }}>
      <View>
        <Text variant='displayLarge'>Snap-A-Day</Text>
        <Text variant='displaySmall'>Track You Memories</Text>
        <Image style={styles.tinyLogo} source={require("../assets/logo.png")} />
      </View>
      <TextInput
        label='Email'
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        label='Password'
        secureTextEntry
        value={password}
        onChangeText={(e) => setPassword(e)}
        right={<TextInput.Icon icon='eye' />}
      />
      <Button
        icon='login'
        mode='contained'
        style={{ marginTop: "3%", marginBottom: "3%" }}
        onPress={handleLogin}
      >
        Login
      </Button>
      <Text
        style={{ color: "blue" }}
        onPress={() => navigation.navigate("signup")}
      >
        New User? Create an account here
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
    marginTop: "10%",
    marginBottom: "30%",
    marginHorizontal: "30%",
  },
});
export default Signin;

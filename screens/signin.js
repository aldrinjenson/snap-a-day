import { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
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
      navigation.navigate("camera");
    } else {
      console.log("error in logging in");
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ paddingTop: '8%', paddingHorizontal: '3%' }}>
      <Text variant='displayLarge'>Sign In</Text>
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
      <Button icon='login' mode='contained' style={{}} onPress={handleLogin}>
        Press me
      </Button>
      <Text onPress={() => navigation.navigate('signup')}>New User? Create an account here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Signin;

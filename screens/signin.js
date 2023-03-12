import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { supabase } from "../utils";

const Signin = (navigation) => {
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
      navigation.navigate('home')
    } else {
      console.log("error in logging in");
      console.log(error);
    }
  };
  return (
    <View>
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
      <Button icon='login' mode='contained' onPress={handleLogin}>
        Press me
      </Button>
      <Text>New User? Create an account here</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Signin;

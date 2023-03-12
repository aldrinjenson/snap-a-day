import { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { supabase } from "../utils";

const SignUp = () => {
  const [email, setEmail] = useState("aldrinjenson@gmail.com");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      console.log("Passwords don't match bro!");
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log(data);
    if (data) {
      console.log("Success");
      navigation.navigate('home')
    } else {
      console.log("error in Signing up");
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ paddingTop: '8%', paddingHorizontal: '3%' }}>
      <Text variant='displayLarge'>Sign Up</Text>
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
      <TextInput
        label='Confirm Password'
        secureTextEntry
        value={confirmPassword}
        onChangeText={(e) => setConfirmPassword(e)}
        right={<TextInput.Icon icon='eye' />}
      />
      <Button icon='login' mode='contained' onPress={handleSignup}>
        Press me
      </Button>
      <Text onPress={() => navigation.navigate('signin')}>Already have an account?Sign in here</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default SignUp;

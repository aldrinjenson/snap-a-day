import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { supabase } from "../utils";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    } else {
      console.log("error in Signing up");
      console.log(error);
    }
  };

  return (
    <View>
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
      <Text>New User? Create an account here</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SignUp;

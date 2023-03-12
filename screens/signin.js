import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {};
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

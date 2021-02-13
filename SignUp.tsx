import React from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";

type SignUpStatus =
  | "initial"
  | "signing-up"
  | "sign-up-success"
  | "sign-up-error";

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signUpStatus, setSignUpStatus] = React.useState<SignUpStatus>(
    "initial"
  );

  const signUp = React.useCallback(() => {
    setSignUpStatus("signing-up");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          setSignUpStatus("sign-up-success");
        },
        () => {
          setSignUpStatus("sign-up-error");
        }
      );
  }, [email, password]);

  return (
    <View>
      <Text>Sign Up</Text>
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        autoCompleteType="email"
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.textInput}
        textContentType="newPassword"
        autoCompleteType="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={signUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#fff",
    padding: "1rem",
    border: "1px solid #ddd",
  },
});

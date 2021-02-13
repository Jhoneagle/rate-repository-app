import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../../theme";

import FormikTextInput from "../FormikTextInput";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    display: theme.adjustment.flexible,
    backgroundColor: theme.colors.containerBackground,
    padding: 15,
  },
  signInBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signInBtnText: {
    color: "#ffffff",
    alignSelf: "center",
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="usernameField" name="username" placeholder="Username" />
      <FormikTextInput testID="passwordField" name="password" placeholder="Password" secureTextEntry />
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.signInBtn}>
          <Text testID="submitButton" style={styles.signInBtnText} fontWeight="bold">
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignInForm;

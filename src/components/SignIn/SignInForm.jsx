import React from "react";
import {View} from "react-native";

import FormikTextInput from "../FormikTextInput";
import SubmitButton from "../SubmitButton";
import generalStyles from "../../utils/generalStyles";

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={generalStyles.containerA}>
      <FormikTextInput testID="usernameField" name="username" placeholder="Username" />
      <FormikTextInput testID="passwordField" name="password" placeholder="Password" secureTextEntry />
      <SubmitButton onPress={onSubmit} />
    </View>
  );
};

export default SignInForm;

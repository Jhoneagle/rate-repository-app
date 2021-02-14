import {StyleSheet, TouchableOpacity, View} from "react-native";
import Text from "./Text";
import React from "react";
import theme from "../theme";
import generalStyles from "../utils/generalStyles";

const styles = StyleSheet.create({
  Btn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
});

const SubmitButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={styles.Btn}>
      <Text testID="submitButton" style={generalStyles.buttonText} fontWeight="bold">
        Create a review
      </Text>
    </View>
  </TouchableOpacity>
);

export  default SubmitButton;

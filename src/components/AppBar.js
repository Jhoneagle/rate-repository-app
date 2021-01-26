import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.barBackground,
    display: theme.adjustment.flexible,
    flexDirection: theme.adjustment.toColumns,
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight * 2,
    paddingRight: Constants.statusBarHeight * 0.75,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight * 0.75,
  },
  text: {
    color: theme.colors.barText,
    paddingHorizontal: 8,
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>
          Repositories
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;

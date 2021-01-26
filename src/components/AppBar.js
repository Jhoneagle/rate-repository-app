import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: theme.colors.barBackground,
    display: theme.adjustment.flexible,
    flexDirection: theme.adjustment.toColumns,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: theme.colors.barText,
    paddingHorizontal: 8,
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.flexContainer}>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <Link to="/">
            <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
              Repositories
            </Text>
          </Link>
          <Link to="/signIn">
            <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
              Sign in
            </Text>
          </Link>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;

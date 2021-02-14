import React from 'react';
import {ScrollView, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Link} from 'react-router-native';
import Constants from 'expo-constants';

import Text from "../Text";
import theme from "../../theme";
import useAuthorizedUser from "../../hooks/useAuthorizedUser";
import SignOut from "../SignOut";

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
  const { authorized } = useAuthorizedUser();
  
  return (
    <TouchableWithoutFeedback>
      <View style={styles.flexContainer}>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
          <Link to="/">
            <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
              Repositories
            </Text>
          </Link>
          {authorized ? (
            <>
              <Link to="/createReview">
                <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                  Create a review
                </Text>
              </Link>
              <Link to="/reviews">
                <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                  My reviews
                </Text>
              </Link>
              <SignOut />
            </>
          ) : (
            <>
              <Link to="/signIn">
                <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                  Sign in
                </Text>
              </Link>
              <Link to="/signup">
                <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
                  Sign up
                </Text>
              </Link>
            </>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;

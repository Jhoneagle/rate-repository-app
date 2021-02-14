import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import theme from "../theme";

const styles = StyleSheet.create({
  loader: {
    padding: 20,
    textAlign: 'center',
  }
});

const Loading = ({ loading }) => {
  return loading
    ? <ActivityIndicator style={styles.loader} color={theme.colors.primary} />
    : null;
};

export default Loading;

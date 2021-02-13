import React from 'react';
import { StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: 'center',
  }
});

const Loading = ({ loading, error, errorMessage}) => {
  if (error) {
    return <Text style={styles.text}>{errorMessage}</Text>;
  }

  return loading
    ? <Text style={styles.text}>Loading...</Text>
    : null;
};

export default Loading;

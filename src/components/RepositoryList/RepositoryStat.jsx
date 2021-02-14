import React from 'react';
import {StyleSheet, View} from "react-native";
import Text from "../Text";
import {formatValue} from "../../utils/helperFunctions";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: theme.adjustment.flexible,
    justifyContent: 'center',
  },
});

const RepositoryStat = ({ name, count, testID }) => {
  return (
    <View key={name} style={styles.container}>
      <Text fontWeight="bold" style={{ marginBottom: 5 }} testID={testID}>
        {formatValue(count)}
      </Text>
      <Text color="textSecondary">{name}</Text>
    </View>
  );
};

export default RepositoryStat;

import React from 'react';
import {StyleSheet, View} from "react-native";
import Text from "../Text";
import formatValue from "../../utils/helperFunctions";


const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const RepositoryStat = ({ name, count }) => {
  return (
    <View key={name} style={styles.item}>
      <Text fontWeight="bold" style={{ marginBottom: 5 }}>
        {formatValue(count)}
      </Text>
      <Text color="textSecondary">{name}</Text>
    </View>
  );
};

export default RepositoryStat;

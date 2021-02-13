import {View, StyleSheet} from "react-native";
import React from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

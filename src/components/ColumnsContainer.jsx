import {StyleSheet, View} from "react-native";
import React from "react";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: theme.adjustment.flexible,
    flexDirection: theme.adjustment.toColumns,
    justifyContent: 'flex-start',
  },
});

const ColumnsContainer = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default ColumnsContainer;

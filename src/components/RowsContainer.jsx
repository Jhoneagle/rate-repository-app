import {StyleSheet, View} from "react-native";
import React from "react";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: theme.adjustment.flexible,
    flexDirection: theme.adjustment.toRows,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    flex: 0.8,
  },
});

const RowsContainer = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default RowsContainer;

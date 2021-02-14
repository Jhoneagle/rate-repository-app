import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import RepositoryDetails from "../RepositoryDetails";
import theme from "../../theme";
import generalStyles from "../../utils/generalStyles";

const styles = StyleSheet.create({
  button: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
});

const RepositoryInfo = ({ repository }) => {
  const onSubmit = () => {
    Linking.openURL(`https://github.com/${repository.fullName}`);
  };
  
  return (
    <View style={generalStyles.containerB}>
      <RepositoryDetails repository={repository} />
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={generalStyles.buttonText}>
            Open in GitHub
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RepositoryInfo;

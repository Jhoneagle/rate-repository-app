import React from 'react';
import {
  Linking, View, Text, StyleSheet, Image, TouchableOpacity,
} from 'react-native';
import theme from '../../theme';
import RepositoryStat from "../RepositoryList/RepositoryStat";
import ColumnsContainer from "../ColumnsContainer";
import RowsContainer from "../RowsContainer";
import ColumnsLooseContainer from "../ColumnsLooseContainer";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.containerBackground,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  languageText: {
    color: 'white',
  },
  fullname: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 10,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    marginBottom: 10,
  },
  button: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});
const RepositoryInfo = ({ repository }) => {
  const onSubmit = () => {
    Linking.openURL(`https://github.com/${repository.fullName}`);
  };

  return (
    <View style={styles.container}>
      <ColumnsContainer>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: repository.ownerAvatarUrl,
            }}
          />
        </View>
        <RowsContainer>
          <View>
            <Text style={styles.fullname} testID="fullName">{repository.fullName}</Text>
          </View>
          <View>
            <Text style={styles.description} testID="description">{repository.description}</Text>
          </View>
          <View style={styles.language}>
            <Text style={styles.languageText} testID="language">{repository.language}</Text>
          </View>
        </RowsContainer>
      </ColumnsContainer>
      <ColumnsLooseContainer>
        <RepositoryStat name="stars" count={repository.stargazersCount} testID="stars" />
        <RepositoryStat name="forks" count={repository.forksCount} testID="forks" />
        <RepositoryStat name="rating" count={repository.ratingAverage} testID="reviews" />
        <RepositoryStat name="review" count={repository.reviewCount} testID="rating" />
      </ColumnsLooseContainer>
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Open in GitHub
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RepositoryInfo;

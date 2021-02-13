import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useHistory } from 'react-router-native';
import Text from "../Text";
import theme from "../../theme";
import RepositoryStat from "./RepositoryStat";
import RowsContainer from "../RowsContainer";
import ColumnsContainer from "../ColumnsContainer";
import ColumnsLooseContainer from "../ColumnsLooseContainer";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'white',
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
});

const RepositoryItem = ({ repository }) => {
  const history = useHistory();

  const onPress = () => {
    history.push(`/repositories/${repository.id}`);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
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
            <RepositoryStat name="rating" count={repository.ratingAverage} testID="rating" />
            <RepositoryStat name="review" count={repository.reviewCount} testID="reviews" />
          </ColumnsLooseContainer>
        </View>
      </TouchableOpacity>
    );
};

export default RepositoryItem;

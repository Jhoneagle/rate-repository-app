import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from "../Text";
import theme from "../../theme";
import RepositoryStat from "./RepositoryStat";
import RowsContainer from "../structural/RowsContainer";
import ColumnsContainer from "../structural/ColumnsContainer";
import ColumnsLooseContainer from "../structural/ColumnsLooseContainer";

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

const RepositoryItem = ({ data }) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.container}>
          <ColumnsContainer>
            <View>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: data.ownerAvatarUrl,
                }}
              />
            </View>
            <RowsContainer>
              <View>
                <Text style={styles.fullname}>{data.fullName}</Text>
              </View>
              <View>
                <Text style={styles.description}>{data.description}</Text>
              </View>
              <View style={styles.language}>
                <Text style={styles.languageText}>{data.language}</Text>
              </View>
            </RowsContainer>
          </ColumnsContainer>
          <ColumnsLooseContainer>
            <RepositoryStat name="stars" count={data.stargazersCount} />
            <RepositoryStat name="forks" count={data.forksCount} />
            <RepositoryStat name="rating" count={data.ratingAverage} />
            <RepositoryStat name="review" count={data.reviewCount} />
          </ColumnsLooseContainer>
        </View>
      </TouchableOpacity>
    );
};

export default RepositoryItem;

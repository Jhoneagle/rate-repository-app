import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme';
import ColumnsContainer from "../ColumnsContainer";
import RowsContainer from "../RowsContainer";
import {toDate} from "../../utils/helperFunctions";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.containerBackground,
  },
  nameText: {
    marginBottom: 4,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
  dateText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary,
    padding: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    flexGrow: 0,
    marginRight: 20,
    height: 60,
    width: 60,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
});

const ReviewItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ColumnsContainer>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <RowsContainer>
          <View>
            <Text style={styles.nameText}>{item.user.username}</Text>
          </View>
          <View>
            <Text style={styles.dateText}>{toDate(item.createdAt)}</Text>
          </View>
          <View>
            <Text>{item.text}</Text>
          </View>
        </RowsContainer>
      </ColumnsContainer>
    </View>
  );
};

export default ReviewItem;

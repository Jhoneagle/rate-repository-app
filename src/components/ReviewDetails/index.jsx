import {StyleSheet, View} from "react-native";
import theme from "../../theme";
import ColumnsContainer from "../ColumnsContainer";
import RowsContainer from "../RowsContainer";
import Text from "../Text";
import React from "react";
import generalStyles from "../../utils/generalStyles";
import {toDate} from "../../utils/helperFunctions";

const styles = StyleSheet.create({
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

const ReviewDetails = ({ review }) => {
  return (
    <View style={generalStyles.containerB}>
      <ColumnsContainer>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <RowsContainer>
          <View>
            <Text style={styles.nameText}>{review.user.username}</Text>
          </View>
          <View>
            <Text style={styles.dateText}>{toDate(review.createdAt)}</Text>
          </View>
          <View>
            <Text>{review.text}</Text>
          </View>
        </RowsContainer>
      </ColumnsContainer>
    </View>
  );
};

export default ReviewDetails;

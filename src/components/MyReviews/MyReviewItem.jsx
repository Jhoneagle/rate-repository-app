import React from 'react';
import {useHistory} from 'react-router-native';
import {Alert, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import theme from '../../theme';

import useDeleteReview from '../../hooks/useDeleteReview';
import ColumnsLooseContainer from "../ColumnsLooseContainer";
import generalStyles from "../../utils/generalStyles";
import ReviewDetails from "../ReviewDetails";

const styles = StyleSheet.create({
  viewButton: {
    padding: 15,
    margin: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  deleteButton: {
    padding: 15,
    margin: 15,
    backgroundColor: '#d73a4a',
    borderRadius: 4,
  },
});

const MyReviewItem = ({ review, refetch }) => {
  const history = useHistory();
  const [deleteReview] = useDeleteReview();

  if (!review) {
    return null;
  }

  const handleViewRepository = () => {
    history.push(`/repositories/${review.repository.id}`);
    return true;
  };

  const handleDeleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          // eslint-disable-next-line no-console
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const { id } = review;
            await deleteReview({ id });
            refetch();
          },
        },
      ],
      { cancelable: false },
    );
    return true;
  };

  return (
    <View style={generalStyles.containerB}>
      <ReviewDetails review={review} />
      <ColumnsLooseContainer>
        <TouchableOpacity onPress={handleViewRepository} activeOpacity={0.8}>
          <View style={styles.viewButton}>
            <Text style={generalStyles.buttonText}>
              View repository
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteReview} activeOpacity={0.8}>
          <View style={styles.deleteButton}>
            <Text style={generalStyles.buttonText}>
              Delete review
            </Text>
          </View>
        </TouchableOpacity>
      </ColumnsLooseContainer>
    </View>
  );
};

export default MyReviewItem;

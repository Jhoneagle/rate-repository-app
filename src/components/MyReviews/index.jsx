import React from 'react';
import {FlatList} from 'react-native';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import MyReviewItem from './MyReviewItem';
import {ItemSeparator} from "../ItemSeparator";
import Loading from "../Loading";

const MyReviews = () => {
  const variables = {
    includeReviews: true,
    first: 8,
  };

  const { authorized, loading, fetchMore, refetch } = useAuthorizedUser(variables);

  if (authorized === undefined) {
    return null;
  }

  const { reviews } = authorized;
  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <MyReviewItem item={item} refetch={refetch} />}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={() => <Loading loading={loading}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MyReviews;

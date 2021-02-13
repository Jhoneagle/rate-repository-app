import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import useSingleRepository from '../../hooks/useSingleRepository';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import {ItemSeparator} from "../ItemSeparator";

const Index = () => {
  const { id } = useParams();
  const variables = {
    id,
    first: 8,
  };
  const { repository, fetchMore } = useSingleRepository(variables);

  if (repository === undefined) {
    return null;
  }

  const { reviews } = repository;

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem item={item} />}
      // eslint-disable-next-line no-shadow
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default Index;

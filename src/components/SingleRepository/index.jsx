import React from 'react';
import {FlatList} from 'react-native';
import {useParams} from 'react-router-native';
import useSingleRepository from '../../hooks/useSingleRepository';
import RepositoryInfo from './RepositoryInfo';
import {ItemSeparator} from "../ItemSeparator";
import Loading from "../Loading";
import ReviewDetails from "../ReviewDetails";

const SingleRepository = () => {
  const { id } = useParams();
  const variables = {
    id,
    first: 8,
  };
  const { repository, loading, fetchMore } = useSingleRepository(variables);

  if (!repository) {
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
      renderItem={({ item }) => <ReviewDetails review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ListFooterComponent={() => <Loading loading={loading}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;

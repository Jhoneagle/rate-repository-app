import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useHistory} from 'react-router-native';
import RepositoryDetails from "../RepositoryDetails";

const RepositoryItem = ({ repository }) => {
  const history = useHistory();

  const onPress = () => {
    history.push(`/repositories/${repository.id}`);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <RepositoryDetails repository={repository} />
      </TouchableOpacity>
    );
};

export default RepositoryItem;

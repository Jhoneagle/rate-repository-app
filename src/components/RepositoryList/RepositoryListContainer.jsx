import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import PickerSelect from './PickerSelect';
import SearchBar from './SearchBar';
import {ItemSeparator} from "../ItemSeparator";

class RepositoryListContainer extends React.Component {
  renderItem = ({ item }) => (
    <RepositoryItem repository={item} />
  );

  renderHeader = () => {
    const { setOrderBy, searchValue, handleSearch } = this.props;

    return (
      <>
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
        <PickerSelect setOrderBy={setOrderBy} />
      </>
    );
  }

  render() {
    const { repositories, onEndReach } = this.props;

    if (repositories === undefined) {
      return null;
    }

    const repositoryNodes = repositories.edges
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        testID="RepositoryListContainer"
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;

import React from 'react';
import {FlatList} from 'react-native';
import RepositoryItem from './RepositoryItem';
import SearchBar from '../SearchBar';
import {ItemSeparator} from "../ItemSeparator";
import Loading from "../Loading";
import Dropdown from "../Dropdown";

const dropdownItems = [
  { label: 'Latest repositories', value: 'latest' },
  { label: 'Highest rated repositories', value: 'highest' },
  { label: 'Lowest rated repositories', value: 'lowest' },
];

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setOrderBy, searchValue, handleSearch } = this.props;

    return (
      <>
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
        <Dropdown items={dropdownItems} onValueChange={(value) => setOrderBy(value)} />
      </>
    );
  }

  render() {
    const { repositories, onEndReach, loading } = this.props;

    if (!repositories) {
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
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={() => <Loading loading={loading}/>}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;

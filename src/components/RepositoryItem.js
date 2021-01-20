import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 1,
    },
});

const RepositoryItem = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text>Full name: {data.fullName}</Text>
            <Text>Description: {data.description}</Text>
            <Text>Language: {data.language}</Text>
            <Text>Stars: {data.stargazersCount}</Text>
            <Text>Forks: {data.forksCount}</Text>
            <Text>Reviews: {data.reviewCount}</Text>
            <Text>Rating: {data.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;

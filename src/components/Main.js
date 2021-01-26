import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from "./Repository/RepositoryList";
import AppBar from "./AppBar";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <RepositoryList />
        </View>
    );
};

export default Main;

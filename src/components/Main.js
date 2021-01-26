import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from "./Repository/RepositoryList";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
              <Route path="/" exact>
                <RepositoryList />
              </Route>
              <Route path="/signIn" exact>
                <SignIn />
              </Route>
              <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;

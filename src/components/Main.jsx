import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from "./RepositoryList";
import SingleRepository from "./SingleRepository";
import CreateReview from "./CreateReview";
import MyReviews from "./MyReviews";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
      display: theme.adjustment.flexible,
      backgroundColor: theme.colors.containerBackground,
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
              <Route path="/repositories/:id" exact>
                <SingleRepository />
              </Route>
              <Route path="/createReview" exact>
                <CreateReview />
              </Route>
              <Route path="/reviews" exact>
                <MyReviews />
              </Route>
              <Route path="/signIn" exact>
                <SignIn />
              </Route>
              <Route path="/signup" exact>
                <SignUp />
              </Route>
              <Redirect to="/" />
            </Switch>
        </View>
    );
};

export default Main;

import React from 'react';
import {View} from 'react-native';
import {Redirect, Route, Switch} from 'react-router-native';

import RepositoryList from "./RepositoryList";
import SingleRepository from "./SingleRepository";
import CreateReview from "./CreateReview";
import MyReviews from "./MyReviews";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import generalStyles from "../utils/generalStyles";

const Main = () => {
    return (
        <View style={generalStyles.containerB}>
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

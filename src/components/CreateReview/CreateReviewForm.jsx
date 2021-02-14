import React from 'react';
import {View} from 'react-native';

import FormikTextInput from '../FormikTextInput';
import SubmitButton from "../SubmitButton";
import generalStyles from "../../utils/generalStyles";

const CreateReviewForm = ({ onSubmit }) => (
  <View style={generalStyles.containerA}>
    <FormikTextInput testID="repoOwnerField" name="repoOwnerName" placeholder="Repository owner name"/>
    <FormikTextInput testID="repositoryNameField" name="repoName" placeholder="Repository name"/>
    <FormikTextInput testID="ratingField" name="rating" placeholder="Rating between 0 and 100"/>
    <FormikTextInput testID="reviewField" name="review" placeholder="Review" multiline/>
    <SubmitButton onPress={onSubmit} />
  </View>
);

export default CreateReviewForm;

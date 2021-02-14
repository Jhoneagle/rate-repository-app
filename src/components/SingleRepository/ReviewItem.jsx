import React from 'react';
import ReviewDetails from "../ReviewDetails";

const ReviewItem = ({ item }) => {
  return item
    ? <ReviewDetails review={item} />
    : null;
};

export default ReviewItem;

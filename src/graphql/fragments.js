import {gql} from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;



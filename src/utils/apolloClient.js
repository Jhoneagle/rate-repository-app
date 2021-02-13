import ApolloClient from 'apollo-boost';
import { APOLLO_URI } from '@env';

// eslint-disable-next-line arrow-body-style
const createApolloClient = (authStorage) => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    uri: APOLLO_URI,
  });
};

export default createApolloClient;

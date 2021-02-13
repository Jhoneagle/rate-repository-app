import { useApolloClient } from '@apollo/react-hooks';
import {useContext} from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import {useHistory} from "react-router-native";

const useSignOut = () => {
  const history = useHistory();
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  
  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push('/');
  };
  
  return [signOut];
};

export default useSignOut;

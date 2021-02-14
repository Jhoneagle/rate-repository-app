import {StyleSheet} from "react-native";
import theme from "../theme";

const generalStyles = StyleSheet.create({
  containerA: {
    display: theme.adjustment.flexible,
    backgroundColor: theme.colors.containerBackground,
    padding: 15,
  },
  containerB: {
    backgroundColor: theme.colors.containerBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
  buttonText: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
  },
});

export default generalStyles;

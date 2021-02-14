import {Platform} from "react-native";

const theme = {
  adjustment: {
    flexible: 'flex',
    toRows: 'column',
    toColumns: 'row',
  },
  colors: {
    barBackground: '#24292e',
    barText: '#ffffff',
    containerBackground: '#ffffff',
    delete: '#d73a4a',
    error: '#d73a4a',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;

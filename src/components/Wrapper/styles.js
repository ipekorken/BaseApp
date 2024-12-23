import {StyleSheet} from 'react-native';

export const getStyles = (wh, ww, colors, insets) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors?.background?.primary,
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    contentContainer: {
      flex: 1,
    },
    subContainer: {
      flex: 1,
      backgroundColor: colors?.background?.secondary,
    },
  });

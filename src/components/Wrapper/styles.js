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
      // width: ww * 0.9,
      // height: wh * 0.8,
      // backgroundColor: colors?.background?.secondary,
    },
  });

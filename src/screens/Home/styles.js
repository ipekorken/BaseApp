import {StyleSheet} from 'react-native';

export const getStyles = (wh, ww, theme) =>
  StyleSheet.create({
    container: {
      width: ww,
      height: wh,
      backgroundColor: theme?.background?.primary,
    },
  });

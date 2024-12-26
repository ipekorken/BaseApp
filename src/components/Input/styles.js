import {StyleSheet} from 'react-native';

export const getStyles = (wh, ww, colors) =>
  StyleSheet.create({
    inputText: {
      color: colors?.text?.primary,
      fontSize: ww * 0.035,
      fontFamily: 'Poppins',
    },
    inputTextView: {
      paddingTop: wh * 0.01,
      paddingBottom: wh * 0.01,
    },
  });

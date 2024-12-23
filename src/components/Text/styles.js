import {StyleSheet} from 'react-native';

export const getStyles = (wh, ww, colors) =>
  StyleSheet.create({
    text: {
      color: colors?.text?.primary,
      fontSize: ww * 0.035,
      fontFamily: 'Poppins',
    },
    textView: {},
    subText: {
      color: colors?.text?.secondary,
      fontSize: ww * 0.045,
      fontFamily: 'Poppins',
    },
    subTextView: {},
    titleText: {
      color: colors?.text?.primary,
      fontSize: ww * 0.055,
      fontFamily: 'Poppins',
    },
    titleTextView: {},
  });

//Font settings
//ww * 0.35 => 14
//ww * 0.4 => 16

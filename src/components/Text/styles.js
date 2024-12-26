import {StyleSheet} from 'react-native';

export const getStyles = (wh, ww, isPortrait, colors) =>
  StyleSheet.create({
    text: {
      color: colors?.text?.primary,
      fontSize: isPortrait ? ww * 0.035 : wh * 0.035,
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    textView: {},
    subText: {
      color: colors?.text?.secondary,
      fontSize: isPortrait ? ww * 0.045 : wh * 0.045,
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
    subTextView: {},
    titleText: {
      color: colors?.text?.primary,
      fontSize: isPortrait ? ww * 0.055 : wh * 0.055,
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    titleTextView: {},
    editableText: {
      fontFamily: 'Poppins',
    },
    editableTextView: {},
  });

//Font settings
//ww * 0.35 => 14
//ww * 0.4 => 16

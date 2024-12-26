import {Text, View} from 'react-native';
import React from 'react';
import {useOrientation, useTheme} from '@/hooks';
import {getStyles} from './styles';

const CustomText = ({
  text,
  textType,
  bg,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  color,
  fs,
  fw,
  fstyle,
}) => {
  // textType => title, subTitle, text, editable
  const {ww, wh, isPortrait} = useOrientation();
  const colors = useTheme();
  const styles = getStyles(wh, ww, isPortrait, colors);

  const TitleText = () => {
    return (
      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>{text}</Text>
      </View>
    );
  };

  const SubTitleText = () => {
    return (
      <View style={styles.subTextView}>
        <Text style={styles.subText}>{text}</Text>
      </View>
    );
  };

  const NormalText = () => {
    return (
      <View style={styles.textView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  const EditableText = () => {
    return (
      <View
        style={[
          styles.editableTextView,
          {
            backgroundColor: bg,
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml,
            marginRight: mr,
            paddingTop: pt,
            paddingBottom: pb,
            paddingLeft: pl,
            paddingRight: pr,
          },
        ]}>
        <Text
          style={[
            styles.editableText,
            {color: color, fontSize: fs, fontWeight: fw, fontStyle: fstyle},
          ]}>
          {text}
        </Text>
      </View>
    );
  };

  return textType == 'title' ? (
    <TitleText />
  ) : textType == 'subTitle' ? (
    <SubTitleText />
  ) : textType == 'normal' ? (
    <NormalText />
  ) : (
    <EditableText />
  );
};

export default CustomText;

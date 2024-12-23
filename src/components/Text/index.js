import {Text, View} from 'react-native';
import React from 'react';
import {useOrientation, useTheme} from '@/hooks';
import {getStyles} from './styles';

const CustomText = ({text, textType}) => {
  // textType => title, subTitle, text
  const {ww, wh} = useOrientation();
  const colors = useTheme();
  const styles = getStyles(wh, ww, colors);

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

  return textType == 'title' ? (
    <TitleText />
  ) : textType == 'subTitle' ? (
    <SubTitleText />
  ) : (
    <NormalText />
  );
};

export default CustomText;

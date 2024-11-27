import React from 'react';
import {View, Text} from 'react-native';
import {useOrientation, useTheme} from '@/hooks';
import {getStyles} from './styles';

const HomePage = () => {
  const {ww, wh} = useOrientation();
  const theme = useTheme();
  const styles = getStyles(wh, ww, theme);

  return <View style={styles.container}></View>;
};

export default HomePage;

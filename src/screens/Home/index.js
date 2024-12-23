import React from 'react';
import {View} from 'react-native';
import {useOrientation, useTheme} from '@/hooks';
import {getStyles} from './styles';
import {Wrapper} from '@/components';

const HomePage = () => {
  const {ww, wh} = useOrientation();
  const colors = useTheme();
  const styles = getStyles(wh, ww, colors);

  return (
    <Wrapper wrapperType={'scroll'}>
      <View style={styles.container}></View>
    </Wrapper>
  );
};

export default HomePage;

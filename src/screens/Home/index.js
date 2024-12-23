import React from 'react';
import {View} from 'react-native';
import {useOrientation, useTheme} from '@/hooks';
import {getStyles} from './styles';
import {CustomText, Wrapper} from '@/components';

const HomePage = () => {
  const {ww, wh} = useOrientation();
  const colors = useTheme();
  const styles = getStyles(wh, ww, colors);

  return (
    <Wrapper wrapperType={'scroll'}>
      <View style={styles.container}>
        <CustomText textType={'normal'} text={'Deneme'} />
        <CustomText textType={'subTitle'} text={'Deneme'} />
        <CustomText textType={'title'} text={'Deneme'} />
      </View>
    </Wrapper>
  );
};

export default HomePage;

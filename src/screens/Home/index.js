import React, {useState} from 'react';
import {View} from 'react-native';
import {useOrientation, useTheme} from '@/hooks';
import {getStyles} from './styles';
import {CustomInput, CustomText, Wrapper} from '@/components';
import {useRef} from 'react';

const HomePage = () => {
  const {ww, wh, isPortrait} = useOrientation();
  const colors = useTheme();
  const styles = getStyles(wh, ww, colors);

  const [deneme, setDeneme] = useState('');
  const denemeRef = useRef();

  return (
    <Wrapper wrapperType={'scroll'}>
      <View style={styles.container}>
        <CustomText textType={'normal'} text={'Deneme'} />
        <CustomText textType={'subTitle'} text={'Deneme'} />
        <CustomText textType={'title'} text={'Deneme'} />
        <CustomText
          textType={'editable'}
          text={'Deneme'}
          mt={20}
          ml={10}
          mr={10}
          mb={40}
          bg={colors?.background?.secondary}
          fs={20}
          fw={600}
          fstyle={'italic'}
        />
        <CustomInput
          phone={false}
          placeholder={'deneme'}
          input={deneme}
          setInput={setDeneme}
          inputRef={denemeRef}
          multi={false}
          maxLength={200}
          returnKeyType={'next'}
          fs={isPortrait ? ww * 0.035 : wh * 0.035}
          fw={'400'}
        />
      </View>
    </Wrapper>
  );
};

export default HomePage;

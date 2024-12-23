import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useOrientation, useTheme} from '@/hooks';
import {getStyles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Wrapper = ({children, wrapperType}) => {
  // wrapperType => keyboard, scroll, normal
  const {ww, wh} = useOrientation();
  const colors = useTheme();
  const insets = useSafeAreaInsets();
  const styles = getStyles(wh, ww, colors, insets);

  const KeyboardScrollWrapper = () => {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.subContainer}>{children}</View>
      </KeyboardAwareScrollView>
    );
  };

  const ScrollWrapper = () => {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.subContainer}>{children}</View>
      </ScrollView>
    );
  };

  const NormalWrapper = () => {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>{children}</View>
      </View>
    );
  };

  return wrapperType == 'keyboard' ? (
    <KeyboardScrollWrapper />
  ) : wrapperType == 'scroll' ? (
    <ScrollWrapper />
  ) : (
    <NormalWrapper />
  );
};

export default Wrapper;

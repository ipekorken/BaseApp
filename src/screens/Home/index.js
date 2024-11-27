import {View, Text} from 'react-native';
import React from 'react';
import {useOrientation} from '@/hooks';

const HomePage = () => {
  const orientation = useOrientation();
  console.log('orientation: ', orientation);
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;

import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const HomePageIcon = ({size, color}) => {
  return <Icon name="home-filled" size={size || 20} color={color || '#fff'} />;
};

export default HomePageIcon;

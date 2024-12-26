import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const MaterialIcon = ({name, size, color}) => {
  return <Icon name={name} size={size || 20} color={color || '#fff'} />;
};

export default MaterialIcon;

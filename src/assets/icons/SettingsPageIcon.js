import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const SettingsPageIcon = ({size, color}) => {
  return <Icon name="settings" size={size || 20} color={color || '#fff'} />;
};

export default SettingsPageIcon;

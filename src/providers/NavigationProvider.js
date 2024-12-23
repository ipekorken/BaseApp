import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {useTheme} from '@/hooks';
import {useColorScheme} from 'react-native';
import App from '../../App';

const NavigationProvider = () => {
  const theme = useColorScheme();
  const colors = useTheme();
  const navTheme = {
    colors: {
      background: colors?.background?.primary,
    },
  };

  return (
    <AlertNotificationRoot
      theme={theme}
      colors={[colors?.alert, colors?.alert]}>
      <NavigationContainer theme={navTheme}>
        <App />
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};

export default NavigationProvider;

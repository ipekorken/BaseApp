/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppProvider from '@/providers/AppProvider';

AppRegistry.registerComponent(appName, () => AppProvider);

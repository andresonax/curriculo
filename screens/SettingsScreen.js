import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Informações App',
  };

  render() {
    return <ExpoConfigView />;
  }
}

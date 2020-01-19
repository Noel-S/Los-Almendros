import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function HelpScreen() {
  return <ExpoConfigView />;
}

HelpScreen.navigationOptions = {
  title: 'app.json',
  headerTitleStyle: {
    marginTop: -26
  },
  headerStyle: { 
    height: 32
  }
};
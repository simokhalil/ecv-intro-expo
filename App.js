import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import HomePage from './src/pages/HomePage';
import Page2 from './src/pages/Page2';

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {

    const load = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });

      setIsReady(true);
    };

    load();
  }, [])

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Router>
        <Stack key="root">
          <Scene key="homepage" component={HomePage} title="Home Page" />
          <Scene key="page2" component={Page2} title="Page 2" />
        </Stack>
      </Router>
    </Container>
  );
}
